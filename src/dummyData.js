// 서버에서 가져온 데이터라고 가정하고 임시로 데이터를 생성하기
function generateRandomId(n){
    const nums = new Array(n).fill(0)  // n이 3이면 -> [ , , ] 근데 이걸 0으로 채움(fill(0)) -> [0, 0, 0]
    return nums.map(n => Math.floor(Math.random()*10)).join("") // [0, 0, 0] -> [3, 6, 9] -> join하면 "361" 
}

function generateRandomString(n){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
                        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const str = new Array(n).fill('a') // n:3 -> ["a", "a", "a"]
    return str.map(s => alphabet[Math.floor(Math.random()*alphabet.length)]).join("") 
                        // alphabet의 인덱스 값을 랜덤하게 뽑아서 출력 ["a", "a", "a"] -> ["d", "e", "b"]
}

const dummyData = [
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    }
]

const dummyDate=[
    {},
    {},
    {},
    {},
    {}
]
export default dummyData