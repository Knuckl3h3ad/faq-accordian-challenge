const accordionBtns = document.querySelectorAll('.accordion-btn')

    accordionBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const accordionDesc = this.nextElementSibling;
            const plusIcon = this.querySelector('.plus-icon')
            const minIcon = this.querySelector('.minus-icon')

            if (accordionDesc.style.maxHeight) {
                accordionDesc.style.maxHeight = null
                plusIcon.style.display = 'block'
                minIcon.style.display = 'none'
            } else {
                accordionDesc.style.maxHeight = accordionDesc.scrollHeight + 'px'
                plusIcon.style.display = 'none'
                minIcon.style.display = 'block'
            }
        })
    })