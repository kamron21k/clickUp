    // Tasks Bar

   let vazifalar=[
    {
        topshiriq: 'asdqewq',
        startdate: '22.04.2002',
        finishdate: '23.04.2002',
        xodim: 'ASD',
        status: 'rejected',
        isRejected: false
       }
   ]


   // Chizuvchi funksiya :

   function DrawList(){
    document.getElementById('PandingTask').innerHTML=''
    document.getElementById('DoingTask').innerHTML=''
    document.getElementById('DoneTask').innerHTML=''
    document.getElementById('RejectedTask').innerHTML=''
       for(i=0;i<vazifalar.length;i++){
           if(vazifalar[i].status==='pending'){
               document.getElementById('PandingTask').innerHTML+=
                   '<div>'+
                       `Topshiriq : ${vazifalar[i].isRejected ? '<span class="badge badge-danger">rejected</span>' : ''} <textarea disabled  cols="30" rows="2" class="form-control mt-2 mb-2">${vazifalar[i].topshiriq}</textarea>
                        Boshlanish vaqti : <h6 class="bg-light p-2">${vazifalar[i].startdate}</h6>
                         Tugash vaqti : <h6 class="bg-light p-2">${vazifalar[i].finishdate}</h6>  
                         Xodim :  <h6 class="bg-light p-2">${vazifalar[i].xodim}</h6>
                         <select id="select${i}" class="form-control mt-3">
                            <option disabled selected>Tanlang</option>
                            <option value="doing">Doing Task</option>
                            <option value="done">Done Task</option>
                         </select>
                         <button onclick="editeTask(${i})" type="button" class="btn mt-3 btn-warning">Edite</button>
                         <button onclick="deleteTask(${i})" type="button" class="btn mt-3 ml-1 btn-danger">Delete</button>
                         <hr class="bg-secondary">
                           `
                   +'</div>'
           }
           else if(vazifalar[i].status==='doing'){
            document.getElementById('DoingTask').innerHTML+=
                '<div>'+
                    `Topshiriq : ${vazifalar[i].isRejected ? '<span class="badge badge-danger">rejected</span>' : ''} <textarea disabled  cols="30" rows="2" class="form-control mt-2 mb-2">${vazifalar[i].topshiriq}</textarea>
                     Boshlanish vaqti : <h6 class="bg-light p-2">${vazifalar[i].startdate}</h6>
                      Tugash vaqti : <h6 class="bg-light p-2">${vazifalar[i].finishdate}</h6>  
                      Xodim :  <h6 class="bg-light p-2">${vazifalar[i].xodim}</h6>
                      <select id="select${i}" class="form-control mt-3">
                            <option disabled selected>Tanlang</option>
                            <option value="pending">Panding Task</option>
                            <option value="done">Done Task</option>
                         </select>
                         <button onclick="editeTask(${i})" type="button" class="btn mt-3 btn-warning">Edite</button>
                         <button onclick="deleteTask(${i})"  type="button" class="btn mt-3 ml-1 btn-danger">Delete</button>
                         <hr class="bg-secondary">
                        `
                +'</div>'
        }
        else if(vazifalar[i].status==='done'){
            document.getElementById('DoneTask').innerHTML+=
                `<div>
                    Topshiriq : <textarea disabled  cols="30" rows="2" class="form-control mt-2 mb-2">${vazifalar[i].topshiriq}</textarea>
                     Boshlanish vaqti : <h6 class="bg-light p-2">${vazifalar[i].startdate}</h6>
                      Tugash vaqti : <h6 class="bg-light p-2">${vazifalar[i].finishdate}</h6>  
                      Xodim :  <h6 class="bg-light p-2">${vazifalar[i].xodim}</h6>
                         <button onclick="rejectTask(${i})" type="button" class="btn mt-3 btn-danger w-100">Rejected</button>
                         <hr class="bg-secondary">
                    </div>`
        }
        else if(vazifalar[i].status==='rejected'){
            document.getElementById('RejectedTask').innerHTML+=
                '<div>'+
                    `Topshiriq : <textarea disabled  cols="30" rows="2" class="form-control mt-2 mb-2">${vazifalar[i].topshiriq}</textarea>
                     Boshlanish vaqti : <h6 class="bg-light p-2">${vazifalar[i].startdate}</h6>
                      Tugash vaqti : <h6 class="bg-light p-2">${vazifalar[i].finishdate}</h6>  
                      Xodim :  <h6 class="bg-light p-2">${vazifalar[i].xodim}</h6>
                      <select id="select${i}" class="form-control mt-3">
                            <option disabled selected>Tanlang</option>
                            <option value="pending">Pending Task</option>
                            <option value="doing">Doing Task</option>
                         </select>
                         <button onclick="editeTask(${i})" type="button" class="btn mt-3 btn-warning w-100">Edite</button>
                         <hr class="bg-secondary">
                        `
                +'</div>'
        }
       }
   }
   DrawList()


   function addTask(){
       let b1=document.forms['myForm']['a1'].value
       let b2=document.forms['myForm']['a2'].value
       let b3=document.forms['myForm']['a3'].value
       let b4=document.forms['myForm']['a4'].value
       let b5=document.forms['myForm']['a5'].value

       let newTask={
        topshiriq: b1,
        startdate: b2,
        finishdate: b3,
        xodim: b4,
        status: b5,
        isRejected: false
       }

       vazifalar.push(newTask)
       DrawList()
       document.forms['myForm'].reset()
   }

    function deleteTask(deIndex){
        vazifalar.splice(deIndex,1)
        DrawList()
    }
    
    function editeTask(editIndex){
        if(document.getElementById(`select${editIndex}`).value!=='Tanlang'){
          vazifalar[editIndex].status=document.getElementById(`select${editIndex}`).value
        }
        else{
            alert('err')
        }
        DrawList()
     }

//    vazifalar[editIndex].status=document.getElementById('select'+editIndex).value

       function rejectTask(rejIndex){
          vazifalar[rejIndex].status="rejected"
          vazifalar[rejIndex].isRejected=true
          console.log(vazifalar[rejIndex].isRejected);
          DrawList()
       }