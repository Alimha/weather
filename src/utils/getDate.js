export  function  getDate (dt,type) {
    
    const data = new Date(dt * 1000)
    
   return   type == 'weekday' ? data.toLocaleString('ru-RU', {weekday : 'short'}) :
            type == 'month'   ? data.toLocaleString('ru-RU', {month: 'short'})    :
            type == 'day'     ? data.toLocaleString('ru-RU', {day: 'numeric'})    : ''
     
}