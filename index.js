reactionImg = document.querySelectorAll(".img")
memoryimg = document.querySelectorAll(".img")
verbalImg = document.querySelectorAll(".img")
visualImg = document.querySelectorAll(".img")


reactionText = document.querySelectorAll(".text")
memoryText = document.querySelectorAll(".text")
verbalText = document.querySelectorAll(".text")
visualText = document.querySelectorAll(".text")

reactionScore = document.querySelectorAll(".score")
memoryScore = document.querySelectorAll(".score")
verbalScore = document.querySelectorAll(".score")
visualScore = document.querySelectorAll(".score")

fetch("data.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  for (let i = 0; i < data.length; i++) {
      reactionImg[0].src = data[0].icon
      memoryimg[1].src = data[1].icon
      verbalImg[2].src = data[2].icon
      visualImg[3].src = data[3].icon

      reactionText[0].textContent = data[0].category
      memoryText[1].textContent = data[1].category
      verbalText[2].textContent = data[2].category
      visualText[3].textContent = data[3].category

      reactionScore[0].textContent = data[0].score
      memoryScore[1].textContent = data[1].score
      verbalScore[2].textContent = data[2].score
      visualScore[3].textContent = data[3].score
    }
  })