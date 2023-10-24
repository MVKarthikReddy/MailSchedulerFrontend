import axios from "axios"

function DeleteSchedule({del,setDel,schedule}) {


    const delSched = async () => {

        const token = localStorage.getItem('token')

        await axios.delete(
            `https://mailschedulerbackendservice.onrender.com/api/schedule/${schedule._id}`,
            {
                headers : { 
                    Authorization : `Bearer ${token}` 
                }
            }
        ).then((res) => {
            alert("Schedule successfully deleted")
            window.location.reload()
        })


    }
  return (
    <div>
        <div>
            <h3>Do you really want to delete the schedule</h3>
        </div>
        <div>
            <form onSubmit={() => {delSched()}}>
                <button onClick={() => {setDel(!del)}}>cancel</button>
                <button type="submit">confirm</button>
            </form>
        </div>
    </div>
  )
}

export default DeleteSchedule