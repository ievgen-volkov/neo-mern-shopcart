import  {useState} from 'react';

export  const useModal = () => {
  const [open ,setOpen] = useState(false)

  function toggle() {
    setOpen(open => !open)
  }

  return { open,toggle}

};

