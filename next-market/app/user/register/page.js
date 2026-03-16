"use client"
import {useState} from "react"

const Register  = () =>{
    // 初期値を入れる""
    // set~にはnameの更新データを入れる。
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit= () =>{
        try{
            // データの取得やデータの送付を行える
            // ""にはデータの送付先を記述する。
            fetch("http://localhost:3000/api/user/register",{
                method:"POST",
                headers:{ 
                    "Accept": "application/json", 
                    "Content-Type": "application/json"
                },
                // requestの中のreqbodyとは？P56
                // 送るデータをjson形式に変換する。
                body: JSON.stringify({
                    name:name,
                    email:email,
                    password:password,
                })
            })
        } catch{
            alert("ユーザー登録失敗")
        }
    }

    return (
        <div>
            <h1>ユーザー登録</h1>
            {/* onSubmitはクライアントコンポーネントなので、
            use clientでサーバーコンポーネントを変換する必要あり */}
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="名前" required/> 
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder="パスワード" required/>
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register
