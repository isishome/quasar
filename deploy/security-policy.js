export function securityPolicy(existing, name) {
  const policy = structuredClone(existing || {})
  policy.Name = name
  policy.Comment = 'Quasar 사이트 보안 헤더'
  const headers = (policy.SecurityHeadersConfig ||= {})
  headers.ContentTypeOptions = { Override: true }
  headers.ReferrerPolicy ||= {
    ReferrerPolicy: 'strict-origin-when-cross-origin',
    Override: true,
  }
  headers.FrameOptions ||= { FrameOption: 'SAMEORIGIN', Override: true }
  headers.StrictTransportSecurity ||= {
    AccessControlMaxAgeSec: 86400,
    IncludeSubdomains: false,
    Preload: false,
    Override: true,
  }
  // 광고의 script/frame 허용 목록은 운영 관찰 후 강화한다.
  headers.ContentSecurityPolicy ||= {
    ContentSecurityPolicy:
      "object-src 'none'; base-uri 'self'; frame-ancestors 'self'",
    Override: true,
  }
  return policy
}
