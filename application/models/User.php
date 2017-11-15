<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Model
{
     function __construct()
     {
          // Call the Model constructor
          parent::__construct();
     }

    //get the username & password from tbl_usrs
     function checkUser($usr, $pwd)
     {
          $pwd = md5($pwd);
          $this->db->select('*');
          $this->db->from ('user_admin');
          $this->db->where('username', $usr);
          $this->db->where('password', $pwd);
          $this->db->where('status', 'TRUE');
          $query = $this->db->get ();
          if ($query->num_rows() > 0) {
            foreach ($query->result() as $row){
              $userData['uid'] = $row -> uid;
              $userData['name'] = $row -> name;
              $userData['username'] = $row -> username;
              $userData['authStatus'] = TRUE;
            }
          } else {
              $userData['authStatus'] = FALSE;
          }

         // log_message('info','last query '.$this->db->last_query());
          // log_message('info',print_r($userData,TRUE));
          return $userData;
     }

    
}?>