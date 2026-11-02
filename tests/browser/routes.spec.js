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
