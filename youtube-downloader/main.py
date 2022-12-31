import requests, json, time, re


YOUTUBE_API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"

class YouTube:
    def __init__(self, url) -> None:
        self.url = url
        self.id = self.video_id
        self.api_key = YOUTUBE_API_KEY
        self.data = self.get_data()

    def get_data(self) -> dict:
        endpoint = 'https://www.youtube.com/youtubei/v1/player'
        query = {
            'videoId': self.id,
            'key':  self.api_key,
            'contentCheckOk': True,
            'racyCheckOk': True
        }
        base_headers = {
            "User-Agent": "Mozilla/5.0",
            "accept-language": "en-US,en",
            'Content-Type': 'application/json'
        }
        data = {
            'context': {
                'client': {
                    'clientName': 'ANDROID',
                    'clientVersion': '16.20'
                }
            }

        }
        data = bytes(json.dumps(data), encoding="utf-8")
        response = requests.post(
            url=endpoint, params=query, headers=base_headers, data=data).json()
        self.data = response
        return self.data

    @property
    def video_info(self):
        return self.data.get('videoDetails', None)

    @property
    def stream_info(self):
        return self.data.get('streamingData', None)

    @property
    def video_streams(self):
        streams = self.stream_info.get('formats')
        for x in streams:
            x['filesize'] = self.filesize(x['bitrate'])
            x['format'] = x['mimeType'].split(';')[0].split('/')[1]
        return streams

    @property
    def audio_streams(self):
        audio_streams = []
        streams = self.stream_info.get('adaptiveFormats')
        for x in streams:
            if x.get('audioQuality', None):
                x['filesize'] = self.filesize(x['bitrate'])
                x['quality'] = x.get('audioQuality', None).split('_')[-1]
                audio_streams.append(x)
        return audio_streams

    @property
    def title(self):
        return self.video_info.get('title', None)

    @property
    def description(self):
        return self.video_info.get('shortDescription', None)

    @property
    def thumbnail_url(self):
        return f"https://i.ytimg.com/vi/{self.id}/maxresdefault.jpg"

    @property
    def channel_name(self):
        return self.video_info.get('author', None)

    @property
    def duration(self) -> int:
        seconds = int(self.video_info.get('lengthSeconds', None))
        return time.strftime('%H:%M:%S', time.gmtime(seconds))

    @property
    def seconds(self):
        return int(self.video_info.get('lengthSeconds', None))

    def filesize(self, bitrate):
        return int((int(self.seconds) * int(bitrate)) / 8)

    @property
    def video_id(self) -> str:
        pattern = r"(?:v=|\/)([0-9A-Za-z_-]{11}).*"
        regex = re.compile(pattern)
        results = regex.search(self.url)
        return results.group(1)

    def __str__(self) -> str:
        return self.title