<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Book extends CI_Controller {

	function __construct () {
            parent::__construct ();
            $this->load->model('data');        
	}
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function index() {
		$data = $this->init->initPath ('/article');
		// log_message('info','sayan ');
        // log_message('info',print_r($data,TRUE));
        // log_message('info',print_r($data,TRUE));
        $this->load->view('pages/test',$data);
    }

    public function getdoctor() {
        $data = $this->init->initPath ('/book');
        $spec = $this->input->post('spec');

        $doctors = $this->data->fetchDoctorBySpec($spec);

        
        if ($doctors){
            log_message("info",'masa here');
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
        log_message('info','kaya');
        log_message('info',$slots);
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
        $patient['slot'] = $this->input->post('slot');
        $patient['bdate'] = $this->input->post('bdate');
        $patient['doctor'] = $this->input->post('doctor');
       
        $addArticle = $this->data->dataBookSlot($patient);
            // echo json_encode ($response);
            // return $addArticle;
    } 
         public function RegandBookSlot() {

        $data = $this->init->initPath ('/book');
        $patient['pname'] = $this->input->post('pname');
        $patient['pcontact'] = $this->input->post('pcontact');
        $patient['astatus'] = "1";
        $patient['slot'] = $this->input->post('slot');
        $patient['bdate'] = $this->input->post('bdate');
        $patient['doctor'] = $this->input->post('doctor');
        $present = $this->data->datacheckuser($patient['pcontact']);
        if($present==0){
            $addArticle = $this->data->dataRegandBookSlot($patient);
            return 1;
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
        log_message('info','kaaaa');

        if ($doctors){
            $response['status'] = TRUE;
            $response['msg'] =  "Data Fetched";
            $response['dates'] = 1;
            $response['data'] = $doctors;
            echo json_encode ($response);
            return 1;
        }else{
            log_message('info','it is zero1');
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

}
