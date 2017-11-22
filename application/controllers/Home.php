<?php
header('Access-Control-Allow-Origin: *');
defined('BASEPATH') OR exit('No direct script access allowed');
class Home extends CI_Controller {
    public function __construct()
        {
                parent::__construct();
                $this->load->helper(array('form', 'url'));
        }
   // loading main page
    public function index()
        {
            // $this->load->library('calendar');
            $data = $this->init->initPath ('/home');
            $this->load->view('pages/home', $data);
            //$this->load->view('pages/upload_form', array('error' => ' ' ));
        }
    //         // loading profile
    // public function profile()
    //     {
    //         // $this->load->library('calendar');
    //         $data = $this->init->initPath ('/index');
    //         $this->load->view('pages/profile', $data);
    //         //$this->load->view('pages/upload_form', array('error' => ' ' ));
    //     }
}
