import { useLayoutEffect } from "react";

 function useLockBodyScroll() {
	useLayoutEffect(
		() => {
			//get original value of body
			const originalStyle = window.getComputedStyle(document.body).overflow;
			//prevent scrolling on mount
			document.body.style.overflow = "hidden";
			// re-enable scrolling when component unmounts
			return () => (document.body.style.overflow = originalStyle);
		},
		[]
	);
}

export default useLockBodyScroll;