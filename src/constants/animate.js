export const animate = (index) => {
    if (index === 0) {
      return 'fade-down-right'
    } 
    else if (index === 1) {
      return 'fade-down'
    }
    else {
      return 'fade-down-left'
    }
  }