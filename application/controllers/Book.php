
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Book extends CI_Controller {

    function __construct () {
            parent::__construct ();
            $this->load->model('data');
    }
    public function login() {
        $data = $this->init->initPath ('/book');
        $pcontact = $this->input->post('pcontact');
        $pwd = $this->input->post('pwd');
        $userData = $this->data->checklogin ($pcontact, $pwd);

        if ($userData['authStatus'] == FALSE) {
                $newdata = array(
                'loggedIn' => FALSE
                );
                 $response['loggedIn'] = FALSE;
                echo json_encode ($response);
        }elseif ($userData['authStatus'] == TRUE) {
             log_message('info','katrue');
            // set session user datas
            $newdata = array(
                'pid'  => $userData['pid'],
                'pname'  => $userData['pname'],
                'pcontact'  => $userData['pcontact'],
                'loggedIn' => TRUE
                );
                log_message('info',"kkkkkkkkk");
                log_message('info',$userData['pname']);
                $response['pid'] = $userData['pid'];
                $response['pname'] = $userData['pname'];
                $response['pcontact'] = $userData['pcontact'];
                $response['loggedIn'] = TRUE;
                echo json_encode ($response);
                //$this->session->set_userdata($newdata);
                return 1;
        }
    }

    public function logout() {
        $data = $this->init->initPath ('/book');
        // Destroy session data
        //$this->session->sess_destroy();
        redirect(base_url(), 'refresh');
    }


    public function getdoctor() {
        $data = $this->init->initPath ('/book');
        $spec = $this->input->post('spec');

        $doctors = $this->data->fetchDoctorBySpec($spec);


        if ($doctors){
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['statusID'] = 1;
            $response['data'] = $doctors;
            echo json_encode ($response);
            return 1;
        }else{
            // echo json_encode ($response);
            return 0;
        }
        // $response['sata'] = "blaaaa";
        // echo json_encode ($response);
        // return 1;
    }
     public function getspec() {
        $data = $this->init->initPath ('/book');

        $doctors = $this->data->fetchSpec();


        if ($doctors){
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['statusID'] = 1;
            $response['data'] = $doctors;
            echo json_encode ($response);
            return 1;
        }else{
            // echo json_encode ($response);
            return 0;
        }
        // $response['sata'] = "blaaaa";
        // echo json_encode ($response);
        // return 1;
    }

    public function checkforslot() {
        $data = $this->init->initPath ('/book');
        $bdate = $this->input->post('bdate');
        $doctor = $this->input->post('doctor');
        $slots = $this->data->fetchSlot($bdate,$doctor);
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['statusID'] = 1;
            $response['data'] = $slots;
            echo json_encode ($response);
            return 1;
    }
     public function BookSlot() {

        $data = $this->init->initPath ('/book');
        $patient['pcontact'] = $this->input->post('pcontact');
        $patient['pwd'] = $this->input->post('pwd');
        $patient['bdate'] = $this->input->post('bdate');
        $patient['doctor'] = $this->input->post('doctor');
        $slot = $this->data->fetchSlot($patient['bdate'], $patient['doctor']);
        log_message('info','sparta');
        $slot = $slot+1;
        log_message('info',$slot);
        $patient['slot'] = $slot;
        $loginresult = $this->data->CheckLogin($patient['pcontact'], $patient['pwd']);
        if($loginresult){
        // $patient['slot'] = $this->input->post('slot');
        $addArticle = $this->data->dataBookSlot($patient);
        //fetching details to send email
        $pdetails = $this->data->fetchpdetails($patient['pcontact']);
        $ddetails = $this->data->fetchddetails($patient['doctor']);
        //testing details
        log_message('info','the game2 : BookSlot');
        log_message('info', $pdetails['pemail']);
        log_message('info', $pdetails['pname']);
        log_message('info', $pdetails['pcontact']);
        log_message('info', $ddetails['dname']);
        log_message('info', $ddetails['dhospital']);
        //sending email
        $mail = $this->data->sendmail($pdetails['pemail'], $pdetails['pname'],  $ddetails['dname'], $patient['bdate'], $ddetails['dhospital']);
        log_message("info",'login success');
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['login'] = 1;
            $response['data'] = $loginresult;
            echo json_encode ($response);
        return 1;
        }else{
            log_message("info",'login success');
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['login'] = 0;
            echo json_encode ($response);
            return 0;
        }
            // echo json_encode ($response);
            // return $addArticle;
    }

         public function Booking() {

        $data = $this->init->initPath ('/book');
        $patient['pcontact'] = $this->input->post('pcontact');
        $patient['bdate'] = $this->input->post('bdate');
        $patient['doctor'] = $this->input->post('doctor');
        $slot = $this->data->fetchSlot($patient['bdate'], $patient['doctor']);
        if($slot){
        $slot = $slot+1;
        log_message('info',$slot);
        $patient['slot'] = $slot;
        // $patient['slot'] = $this->input->post('slot');
        $addArticle = $this->data->dataBookSlot($patient);
        //fetching details to send email
        $pdetails = $this->data->fetchpdetails($patient['pcontact']);
        $ddetails = $this->data->fetchddetails($patient['doctor']);
        //testing details
        log_message('info','the game2 : BookSlot');
        log_message('info',$pdetails['pemail']);
        log_message('info',$pdetails['pname']);
        log_message('info',$pdetails['pcontact']);
        log_message('info',$patient['bdate']);
        //sending email
        $mail = $this->data->sendmail($patient['pemail'], $pdetails['pname'],  $ddetails['dname'], $patient['bdate'], $ddetails['hospital']);
        log_message("info",'login success');
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['Booked'] = TRUE;
            echo json_encode ($response);
        return 1;
        }else{
            log_message("info",'login success');
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['Booked'] = TRUE;
            echo json_encode ($response);
            return 0;
        }
            // echo json_encode ($response);
            // return $addArticle;
    }

         public function RegandBookSlot() {

        $data = $this->init->initPath ('/book');
        $patient['pname'] = $this->input->post('pname');
        $patient['pcontact'] = $this->input->post('pcontact');
        $patient['astatus'] = "1";
        // $patient['slot'] = $this->input->post('slot');
        $patient['bdate'] = $this->input->post('bdate');
        $patient['doctor'] = $this->input->post('doctor');
        $patient['pwd'] = $this->input->post('pwd');
        $patient['pemail'] = $this->input->post('pemail');
        //$pwd = md5($patient['pwd']);
        $present = $this->data->datacheckuser($patient['pcontact']);
        if($present==0){
            $slot = $this->data->fetchSlot($patient['bdate'],$patient['doctor']);
            log_message('info','sparta');
            $slot = $slot+1;
            log_message('info',$slot);
            $patient['slot'] = $slot;
            log_message('info','booking test1');
            log_message('info',$patient['pemail']);
            $addArticle = $this->data->dataRegandBookSlot($patient);
        $pname = $this->data->fetchpname($patient['pcontact']);
         //fetching details to send email
        $ddetails = $this->data->fetchddetails($patient['doctor']);
        //sending email
        $mail = $this->data->sendmail($patient['pemail'], $pname, $ddetails['dname'], $patient['bdate'], $ddetails['dhospital']);
            $userData = $this->data->checklogin ($patient['pcontact'], $patient['pwd']);
            if ($userData['authStatus'] == FALSE) {
            log_message('info','kafalse');
                   $newdata = array(
                'loggedIn' => FALSE
                );
                 $response['loggedIn'] = FALSE;
                echo json_encode ($response);
                //$this->session->set_userdata($newdata);
            }elseif ($userData['authStatus'] == TRUE) {
            log_message('info','katrue');
            // set session user datas
            $newdata = array(
                'pid'  => $userData['pid'],
                'pname'  => $userData['pname'],
                'pcontact'  => $userData['pcontact'],
                'loggedIn' => TRUE
                );
                $response['pid'] = $userData['pid'];
                $response['pname'] = $userData['pname'];
                $response['pcontact'] = $userData['pcontact'];
                $response['loggedIn'] = TRUE;
                echo json_encode ($response);
                //$this->session->set_userdata($newdata);
            }
        }else{
            return 0;
        }
            // echo json_encode ($response);
            // return $addArticle;
    }

      public function Regist() {

        $data = $this->init->initPath ('/book');
        $patient['pname'] = $this->input->post('pname');
        $patient['pcontact'] = $this->input->post('pcontact');
        $patient['astatus'] = "1";
        // $patient['slot'] = $this->input->post('slot');
        $patient['pwd'] = $this->input->post('pwd');
        $patient['pemail'] = $this->input->post('pemail');
        //$pwd = md5($patient['pwd']);
        $present = $this->data->datacheckuser($patient['pcontact']);
        if($present==0){
            // $slot = $this->data->fetchSlot($patient['bdate'],$patient['doctor']);
            // log_message('info','sparta');
            // $slot = $slot+1;
            // log_message('info',$slot);
            // $patient['slot'] = $slot;
            // log_message('info','booking test1');
            // log_message('info',$patient['pemail']);
            $addArticle = $this->data->dataReg($patient);
            $userData = $this->data->checklogin ($patient['pcontact'], $patient['pwd']);
            if ($userData['authStatus'] == FALSE) {
            log_message('info','kafalse');
                   $newdata = array(
                'loggedIn' => FALSE
                );
                 $response['loggedIn'] = FALSE;
                echo json_encode ($response);
                //$this->session->set_userdata($newdata);
            }elseif ($userData['authStatus'] == TRUE) {
            log_message('info','katrue');
            // set session user datas
            $newdata = array(
                'pid'  => $userData['pid'],
                'pname'  => $userData['pname'],
                'pcontact'  => $userData['pcontact'],
                'loggedIn' => TRUE
                );
                $response['pid'] = $userData['pid'];
                $response['pname'] = $userData['pname'];
                $response['pcontact'] = $userData['pcontact'];
                $response['loggedIn'] = TRUE;
                echo json_encode ($response);
                //$this->session->set_userdata($newdata);
            }
        }else{
            return 0;
        }
            // echo json_encode ($response);
            // return $addArticle;
    }


    public function CheckUser() {
        $data = $this->init->initPath ('/book');
        $pcontact = $this->input->post('pcontact');

        $present = $this->data->datacheckuser($pcontact);

        if ($present==0){
            $response['data'] = "0";
            echo json_encode ($response);
            return 1;
        }else if($present==1){
                $response['data'] = "1";
                echo json_encode ($response);
                return 1;
        }
            // echo json_encode ($response);

        // $response['sata'] = "blaaaa";
        // echo json_encode ($response);
        // return 1;
    }

    public function getslot() {
        $data = $this->init->initPath ('/book');
        $doctor = $this->input->post('doctor');
        $doctors = $this->data->cslot($doctor);

        if ($doctors){
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['dates'] = 1;
            $response['data'] = $doctors;
            echo json_encode ($response);
            return 1;
        }else{
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['dates'] = 0;
            echo json_encode ($response);
            return 1;
        }
        // $response['sata'] = "blaaaa";
        // echo json_encode ($response);
        // return 1;
    }

     public function getpastap() {
        $data = $this->init->initPath ('/book');
        $pcontact = $this->input->post('pcontact');
        $doctor = $this->input->post('doctor');

        $doctors = $this->data->fetchpastAp($pcontact, $doctor);


            if ($doctors){
                $response['status'] = TRUE;
                $response['msg'] =  "Data Fetched";
                $response['pastap'] = 1;
                $response['data'] = $doctors;
                echo json_encode ($response);
                return 1;
            }else{
                // echo json_encode ($response);
                $response['status'] = TRUE;
                $response['msg'] =  "Data Fetched";
                $response['pastap'] = 0;
                echo json_encode ($response);
                return 0;
            }

        // $response['sata'] = "blaaaa";
        // echo json_encode ($response);
        // return 1;
    }

          // Check for user login process
    public function userLoginProcess() {
        $data = $this->init->initPath ('/book');
                // set variables from the form
                $pcontact = $this->input->post('pcontact');
                $pwd = $this->input->post('pwd');
                $userData = $this->data->checklogin ($pcontact, $pwd);


                if ($userData['authStatus'] == FALSE) {
                    echo 0;
                    return 0;
                }elseif ($userData['authStatus'] == TRUE) {
                    // set session user datas
                    $newdata = array(
                        'pid'  => $userData['pid'],
                        'pname'  => $userData['pname'],
                        'pcontact'  => $userData['pcontact'],
                        'loggedIn' => TRUE
                        );
                    log_message('info',"kkkkkkkkk");
                    log_message('info',$userData['pname']);
                    $response['pid'] = $userData['pid'];
                    $response['pname'] = $userData['name'];
                    $response['pcontact'] = $userData['pcontact'];
                     echo json_encode ($response);
                   // $this->session->set_userdata($newdata);
                    echo 1;
                    return 1;
                }
    }

}
