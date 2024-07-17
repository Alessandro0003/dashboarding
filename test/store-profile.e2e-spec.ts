import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza Ale')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com success')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)

  const closeButton = page.getByRole('button', { name: 'Close' })
  const isCloseButtonVisible = await closeButton.isVisible()

  if (!isCloseButtonVisible) {
    console.error('Botão "Close" não está visível')
  } else {
    console.log('Botão "Close" visível, tentando clicar')
    await closeButton.click()
  }

  await expect(page.getByRole('button', { name: 'Pizza Ale' })).toBeVisible()
})
