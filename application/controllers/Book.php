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
        $doctors = $this->data->fetchSlot($bdate,$doctor);

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
     public function bookapp() {

        $data = $this->init->initPath ('/admin');
        $article['cid'] = $this->input->post('');
        $article['file'] = $this->input->post('file');
        $article['dbetype'] = $this->input->post('dbetype');
        $article['astatus'] = $this->input->post('statusofa');
        log_message('info',"kolo");
        $article['image'] =  'temp';
        $article['place'] =  $this->input->post('place');
        $article['imgtext'] =  $this->input->post('imgtext');
        $article['interviewee'] =  $this->input->post('interviewee');
        $article['mainheading'] = $this->input->post('mainheading');
        $article['subheading'] = $this->input->post('subheading');
        $article['author'] = $this->input->post('author');
        $article['date'] = $this->input->post('date');
        // str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        $article['article'] = $this->input->post('article');
        // log_message('info',"yabdaaa1");
        // log_message('info', $article['article']);
        $patterns = '/style.*?>/' ;
        $replace = '>';
        $article['article'] = preg_replace($patterns, $replace, $article['article']);
        $article['article'] = $article['article'];
        
        $patterns = '/style.*\n.*?>/';  
        $replace = '>';
        $article['article'] = preg_replace($patterns, $replace, $article['article']);
        $article['article'] = $article['article'];
        // log_message('info',"yabdaaa2");
        // log_message('info', $article['article']);
        $article['astatus'] = "1";

        $patterns = '/style.*\s.*\n.*\n.?>/';  
        $replace = '>';
        $article['article'] = preg_replace($patterns, $replace, $article['article']);
        $article['article'] = $article['article'];
        // log_message('info',"yabdaaa2");
        // log_message('info', $article['article']);
        $article['astatus'] = "1";

        $patterns = '/style.*\s.*\n.*\n.*\n?>/';  
        $replace = '>';
        $article['article'] = preg_replace($patterns, $replace, $article['article']);
        $article['article'] = $article['article'];
        // log_message('info',"yabdaaa2");
        // log_message('info', $article['article']);
        $article['astatus'] = "1";

        $patterns = '/style.*\s.*\n.*\n.*\n.*\n?>/';  
        $replace = '>';
        $article['article'] = preg_replace($patterns, $replace, $article['article']);
        $article['article'] = $article['article'];
        // log_message('info',"yabdaaa2");
        // log_message('info', $article['article']);


            // $response['status'] = FALSE;
            // $response['msg'] =  "No Data Fetched";
            // $response['statusID'] = 0;
            // $response['count'] = 0;
            // $response['data'] = NULL;
        // log_message('info',print_r($cid,TRUE));
        $addArticle = $this->data->insertArticle($article);
        log_message('info',"happyhappy");
        $response['data'] = $addArticle;
            echo json_encode ($response);
            // return $addArticle;
    } 


