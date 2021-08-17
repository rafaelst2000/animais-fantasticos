function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    
    function activeTab(index) {
      tabContent.forEach((content) => content.classList.remove('ativo'))
      tabContent[index].classList.add('ativo')
    }
  
    tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)))
  }
}

function initAccordion() {
  function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }
  
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if(accordionList.length) {
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')
    accordionList.forEach((item) => item.addEventListener('click', activeAccordion))
  }
}

function initAnimationScroll () {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6
    
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowMetade) < 0
        if(isSectionVisible) section.classList.add('ativo')
        else section.classList.remove('ativo')
      })
    }
  }
  animaScroll()
  window.addEventListener('scroll', animaScroll)
}

initTabNav()
initAccordion()
initAnimationScroll()



