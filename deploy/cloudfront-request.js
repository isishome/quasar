// CloudFront Functions의 viewer-request에 연결한다. 운영 연결 전 기존 함수를 확인한다.
function handler(event) {
  var request = event.request
  if (request.method !== 'GET' && request.method !== 'HEAD') return request
  var uri = request.uri
  // 자산 및 파일 요청을 오류 페이지 HTML로 치환하지 않는다.
  if (/^\/(assets|images|favicon|prismjs)(\/|$)/.test(uri)) return request
  if (uri.indexOf('.') !== -1) return request
  request.uri = '/index.html'
  return request
}
