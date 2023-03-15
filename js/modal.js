(() => {
	const refs = {
		openModalBtn: document.querySelector("[data__modal--open]"),
		closeModalBtn: document.querySelector("[data__modal--close]"),
		modal: document.querySelector("[data__modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("backdrop--hidden");
	}
})();
