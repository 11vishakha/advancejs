
class person{
   
    constructor(name,age,hometown){
        this.name=name,
        this.age=age,
        this.hometown=hometown
    }

    show(){
        console.log(this.name,this.age,this.hometown)
    }
}

 let f1= new person("Vishakha Mhasaye",21,"Nagpur")
 let f2=new person("Ria chaturvedi", 25 ,"Mumbai")
 
 f1.show()
 f2.show()
 
