import { test, expect } from '@playwright/test'

for (const path of ['/', '/intro/why', '/intro/why/', '/plugin/notify']) {
  test(`직접 경로 ${path}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.route(
      /googlesyndication|googletagmanager|google-analytics/,
      (route) => route.abort(),
    )
    await page.goto(path)
    await expect(page.locator('#app')).not.toBeEmpty()
    await expect(page.locator('.q-layout')).toBeVisible()
    expect(errors).toEqual([])
    expect(
      await page.locator('meta[name="viewport"]').getAttribute('content'),
    ).not.toContain('user-scalable=no')
  })
}

test('홈에서는 Prism을 요청하지 않고 강좌에서는 구문 강조를 로드한다', async ({
  page,
}) => {
  const requests = []
  page.on('request', (request) => requests.push(request.url()))
  await page.route(
    /googlesyndication|googletagmanager|google-analytics/,
    (route) => route.abort(),
  )
  await page.goto('/')
  await expect(page.locator('.q-layout')).toBeVisible()
  expect(requests.some((url) => /prism|Code-/.test(url))).toBe(false)
  await page.goto('/intro/start')
  await expect(page.locator('pre code .token').first()).toBeVisible()
})
