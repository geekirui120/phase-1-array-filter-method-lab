function findMatching(drivers, driverName) {
    return drivers.filter(function(name){
    
     return name.toLowerCase() === driverName.toLowerCase();
    });
    
}
function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.startsWith(letters));
}
function matchName(driver, name){
    return driver.filter(driver => driver.name === name); 
}
