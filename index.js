document.addEventListener('click', (e) => {
  e.preventDefault();
})
// сниппет  с заменой прайс
const price = document.querySelector('#price');
// сниппеты функции с заменой ок и слим
const ok = async () => {
  try {
    const res = await fetch('https://vk.com')
    const data = await res.json()

  } catch (e) {
    console.log(e)
  }
}

ok()