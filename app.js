const Bills = document.getElementById('billTotalInput')
const Tip = document.getElementById('tipInput')
const NumberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')



let numberOfPeople = Number(NumberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill= Number(Bills.value);
    const tipPercentage = Number(Tip.value) /100;
    const tipAmount = tipPercentage * bill;
    const total= tipAmount + bill;
    const perPersonTotal  = total / numberOfPeople
     perPersonTotalDiv.innerText=`$${perPersonTotal.toFixed(2)}`
    
   
}

calculateBill()

const increasePeople = () => {
   let MorePeople= numberOfPeople+=1
   NumberOfPeopleDiv.innerText=MorePeople
   calculateBill()
}

const decreasePeople = () => {
    let lessPeople= numberOfPeople-=1
    NumberOfPeopleDiv.innerText=lessPeople
    if(lessPeople <=0){
        alert('hey you can not have less then one person ')
        return
        
    }
    calculateBill()

}


