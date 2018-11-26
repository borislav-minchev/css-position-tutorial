const index = {

	onLoad() {

		// mouseenter mouseleave
		// mouseover mouseout

		const fixedBox = document.getElementsByClassName('box-fixed')[0]
		fixedBox.addEventListener('mouseover', this.onBoxHover)
		fixedBox.addEventListener('mouseout', this.onBoxLeave)

		const absoluteBox = document.getElementsByClassName('box-absolute')[0]
		absoluteBox.addEventListener('mouseover', this.onBoxHover)
		absoluteBox.addEventListener('mouseout', this.onBoxLeave)

		const relativeContainer = document.getElementsByClassName('relative-container')[0]
		relativeContainer.addEventListener('mouseover', this.onRelativeContainerHover)
		relativeContainer.addEventListener('mouseleave', this.onRelativeContainerLeave)

	},

	onBoxHover(event) {
		const element = event.currentTarget
		element.classList.add('hover')
	},

	onBoxLeave(event) {
		const element = event.currentTarget
		element.classList.remove('hover')
	},

	onRelativeContainerHover(event) {
		if (event.target.className == 'relative-container') {
			event.stopPropagation()
			console.log('hover target: ' + event.target.className)
			const relativeBox = document.getElementsByClassName('box-relative')[0]
			relativeBox.classList.add('hover')
		}

	},

	onRelativeContainerLeave(event) {
		if (event.target.className == 'relative-container') {
			event.stopPropagation()
			const relativeBox = document.getElementsByClassName('box-relative')[0]
			relativeBox.classList.remove('hover')
		}

	}

}