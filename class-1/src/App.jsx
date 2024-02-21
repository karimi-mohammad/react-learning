import { useState } from 'react'
function App() {
  const [UserName, setUserName] = useState("")
  const [Avg, setAvg] = useState(0)
  const [IsSubmited, setIsSubmited] = useState(false)
  const submit = () => {
    setIsSubmited(true)
  }
  return (
    <>
      <div className="row">
        <p> آقای</p>
        {
          !IsSubmited && <input type="text" onChange={(e) => {
            setUserName(e.target.value)
          }} />
        }
        {
          IsSubmited &&
          <p>{UserName}</p>

        }
        <p> با معدل</p>
        {
          !IsSubmited && <input type="number" onChange={(e) => {
            setAvg(e.target.value)
          }} />
        }
        {
          IsSubmited && !isNaN(Avg) && <p>{Avg}</p>
        }
        <p>سطح</p>
        {
          IsSubmited && <p>
            {
              Avg <= 20 && Avg > 18 ? ('خیلی خوب') : (Avg > 15 ? ('خوب') : (Avg > 10 ? ('قابل قبول') : (Avg > 0 ? ('نیاز به تلاس بیشتر') : (''))))
            }

          </p>
        }
      </div>
      <button onClick={() => submit()}>Ok</button>
    </>
  )
}

export default App
