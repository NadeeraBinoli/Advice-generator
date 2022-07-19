const randomAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()

  document.querySelector(".advice-id").innerHTML = `ADVICE #${data.slip.id}`
  document.querySelector(".advice-txt").innerHTML = `"${data.slip.advice}"`
}

document.querySelector("button").addEventListener('click', randomAdvice);

randomAdvice();
