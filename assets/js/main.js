console.log('Lev1_13')

const meinText1 = ['Hello', 'World']
const meinText2 = ['Anass', 'Elaine', 'Eric', 'Georg']
const meinText3 = ['Superman', 'Wonderwoman', 'Hulk', 'Batman', 'Spiderman']

let join1 = meinText1.join()
let join2 = meinText1.join('')
let join3 = meinText1.join(' ')
let join4 = meinText1.join('+')

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

join1 = meinText2.join()
join2 = meinText2.join('')
join3 = meinText2.join(' ')
join4 = meinText2.join('+')

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

join1 = meinText3.join()
join2 = meinText3.join('')
join3 = meinText3.join(' ')
join4 = meinText3.join('+')

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

console.log('Lev2_2')

/* let counter = document.getElementById('zahl')
let result = document.getElementById('result')

let soManyOs = () =>{
    let word = ['L','p']
    let oos = ''

    console.log(counter.value)

    for(let o = 1; o <= counter.value ; o++){
        oos +='o'
    } 
    word.splice(1,0,oos)
    console.log(word)
    let wordJoint = word.join('')
    console.log(wordJoint)

    result.innerHTML = `<p> ${wordJoint} <p>`
}
 */

// Lev3_1
console.log('Lev3_1')

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your   poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil"`

const arrayText =[]
let x = 0
let u = 0
textLength = Math.floor(text.length/100)

let ArraySeperator = () =>{

    for(let i = 0; i <= textLength; i++){

        arrayText.push(text.slice(x, x+100))
        x +=100 
    }
    console.log(arrayText)
}

ArraySeperator()


// Lev3_2
console.log('Lev3_2')

let numArr = [5, 22, 15, 100, 55]
let i = 0

numArr.forEach((item, index)=>{

    for(let i = 2; i < item; i++ )
    {
        if(item % i == 0)
        {
            let ergebnis = item / i
            console.log(`${item} lässt sich durch ${i} teilen! das Ergebnis ist ${ergebnis}`)
        }
    }
})


// Lev3_3


let counter = document.getElementById('zahl')
let result = document.getElementById('result')

let soManyOs = () =>{
    let word = ['L','p']
    let oos = ''

    console.log(counter.value)

    if(counter.value > 0){

        if(counter.value % 2 == 0){

            for(let o = 1; o <= counter.value ; o++){
                oos +='o'
            } 
            word.splice(1,0,oos)
            console.log(word)
            let wordJoint = word.join('')
            console.log(wordJoint)   
            result.innerHTML = `<p> ${wordJoint} <p>`
        }else{

            for(let o = 1; o <= counter.value ; o++){
                
                if(o%2==0){
                    oos +='0'
                }else{
                    oos += 'o'
                }
            } 
            word.splice(1,0,oos)
            console.log(word)
            let wordJoint = word.join('')
            console.log(wordJoint)   
            result.innerHTML = `<p> ${wordJoint} <p>`
        }
    }else{
        alert('Sie dürfen keine 0 eingeben')
    }
}