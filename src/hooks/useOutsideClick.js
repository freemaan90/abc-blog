import { useEffect } from 'react'
function useOutsideClick(ref, setValue) {
    useEffect(() => {
        /**
         * verify if is targetting the body and setValue to false
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (event.target === document.body)
                    setValue(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setValue]);
}

export { useOutsideClick }