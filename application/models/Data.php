<?PHP

class Data extends CI_Model {

    function __construct () {
        parent::__construct ();
    }
    
    function fetchSpec () {
    $doctorListArray = array();
    $this->db->select('dspec');
    $this->db->from ('doctor');
    $this->db->distinct();
    $query    = $this->db->get ();
    if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
            $spec1 = "No Data";
        }
    }else{
        foreach ($query->result () as $art){
           $spec1 =  $art->dspec;
           array_push ($doctorListArray, $spec1);
        }
    }

      // log_message('info',print_r($doctorListArray,TRUE));
      return $doctorListArray;
      }


    function CheckLogin ($pcontact, $pwd) {
    $doctorListArray = array();
    $doctorList = array();
    $this->db->where('pcontact', $pcontact);
    $this->db->where('pwd', $pwd);
    $login = $this->db->count_all_results('patient');
    if($login==0){
        return 0;
    }else{
    $this->db->select('*');
    $this->db->from ('patient');
     $this->db->where('pcontact', $pcontact);
    $query = $this->db->get ();
    if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
            $doctorList['pid'] = "No Data";
            $doctorList['pname'] = "No Data";
            $doctorList['pcontact'] = "No Data";
            array_push ($doctorListArray, $doctorList);
        }
    }else{
        foreach ($query->result () as $art){
           $doctorList['pid'] =  $art->pid;
           $doctorList['pname'] =  $art->pname;
           $doctorList['pcontact'] =  $art->pcontact;
           array_push ($doctorListArray, $doctorList);
        }
    }
      //log_message('info',print_r($doctorListArray,TRUE));
      return $doctorListArray;
    }
      }

    function fetchDoctorBySpec ($spec) {
    $categoryList = array();
    $categoryListArray = array();
    if($spec=="all"){
         $this->db->select('*');
    $this->db->from ('doctor');
      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['did'] = "No Data";
         $categoryList['dname'] = "No Data";
          $categoryList['dspec'] = "No Data";
           $categoryList['dhospital'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){

       $categoryList['did'] = $art->did;
        $categoryList['dname'] = $art->dname;
         $categoryList['dspec'] = $art->dspec;
           $categoryList['dhospital'] = $art->dhospital;

       array_push ($categoryListArray, $categoryList);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $categoryListArray;
      }
    }else{
    $this->db->select('*');
    $this->db->from ('doctor');
    $this->db->where('dspec', $spec);
      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['did'] = "No Data";
         $categoryList['dname'] = "No Data";
          $categoryList['dspec'] = "No Data";
           $categoryList['dhospital'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){

       $categoryList['did'] = $art->did;
        $categoryList['dname'] = $art->dname;
         $categoryList['dspec'] = $art->dspec;
           $categoryList['dhospital'] = $art->dhospital;

       array_push ($categoryListArray, $categoryList);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $categoryListArray;
      }
    }
    }
function fetchSlot ($bdate,$doctor) {

    $categoryList = array();
    $categoryListArray = array();
    $this->db->where('adate', $bdate);
    $this->db->where('adid', $doctor);
    $num_rows = $this->db->count_all_results('appointment');

    log_message("info",'appointments for that day');
    log_message('info',$num_rows);

    return $num_rows;
    }

        // Booking functions ------------------------------
    function dataRegandBookSlot ($article) {
      $data = array(
          'pname' => $article['pname'],
          'pcontact' => $article['pcontact'],
          'astatus' => $article['astatus'],
          'pwd' => $article['pwd']
      );
      $this->db->insert('patient', $data);

      $data = array(
          'adid' => $article['doctor'],
          'apcontact' => $article['pcontact'],
          'aslot' => $article['slot'],
          'adate' => $article['bdate'],
      );
      $this->db->insert('appointment', $data);
      // $data = array(
      //      'cstatus' => '1'
      //   );
      // $this->db->where('catid', $cid);
      // $this->db->where('ctype', 'news');
      // $this->db->update('tdb_category', $data);
    }
    function dataBookSlot ($article) {
      $data = array(
          'adid' => $article['doctor'],
          'apcontact' => $article['pcontact'],
          'aslot' => $article['slot'],
          'adate' => $article['bdate'],
      );
      $this->db->insert('appointment', $data);

      // $data = array(
      //      'cstatus' => '1'
      //   );
      // $this->db->where('catid', $cid);
      // $this->db->where('ctype', 'news');
      // $this->db->update('tdb_category', $data);
    }
  function datacheckuser ($pcontact) {
    $categoryList = array();
    $categoryListArray = array();
    $this->db->where('pcontact', $pcontact);
    $cuser = $this->db->count_all_results('patient');
    if($cuser>=1){
      $cuser=1;
    }
    return $cuser;
  }
  //   function datacheckactiveuser ($pcontact) {
  //     $this->db->select('astatus');
  //     $this->db->from('patient');
  //     $this->db->where('pcontact',$pcontact);
  //     $reault_array = $this->db->get()->result_array();
  //     return $reault_array[0]['astatus'];
  // }
    function cslot ($doctor){
      $flag=0;

      $dateListArray = array();
      $this->db->select('dslots');
      $this->db->from('doctor');
      $this->db->where('did',$doctor);
      $reault_array = $this->db->get()->result_array();
      if($reault_array){
      $tslot = $reault_array[0]['dslots'];

      $start = date("Y/m/d");
      $end = (date('Y-m-d', strtotime("+30 days")));
      $datediff = strtotime($end) - strtotime($start);
      $datediff = floor($datediff/(60*60*24));
      for($i = 0; $i < $datediff + 1; $i++){
        $checkdate =  date("Y-m-d", strtotime($start . ' + ' . $i . 'day'));
        $this->db->where('adate', $checkdate);
        $this->db->where('adid', $doctor);
        $slots = $this->db->count_all_results('appointment');
        if($slots>=$tslot){
            $flag=1;
            array_push ($dateListArray, $checkdate);
          }else{

          }
      }
    }
      if($flag==0){

        return 0;
      }else{
      return $dateListArray;
    }
  }

      function fetchpastAp ($pcontact) {
    $categoryList = array();
    $categoryListArray = array();
         $this->db->select('*');
    $this->db->from ('appointment');
    $this->db->join('doctor', 'doctor.did = appointment.adid');
    $this->db->where('appointment.apcontact',$pcontact);

      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['adid'] = "No Data";
         $categoryList['apcontact'] = "No Data";
          $categoryList['aslot'] = "No Data";
           $categoryList['adate'] = "No Data";
            $categoryList['doctor'] = "No Data";
             $categoryList['hospital'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){

       $categoryList['adid'] = $art->adid;
       $categoryList['apcontact'] = $art->apcontact;
       $categoryList['aslot'] = $art->aslot;
       $categoryList['adate'] = $art->adate;
       $categoryList['doctor'] = $art->dname;
       $categoryList['hospital'] = $art->dhospital;


       array_push ($categoryListArray, $categoryList);
        }

       // log_message('info','articleDataList '.$this->db->last_query());
     //log_message('info',print_r($cat,TRUE));
      return $categoryListArray;

    }
    }
  //    function unamed ($spec) {

  //   $doctorListArray = array();
  //   $this->db->select('dspec');
  //   $this->db->from ('doctor');
  //   $this->db->distinct();
  //   $query    = $this->db->get ();
  //   if ($query->num_rows() < 0){
  //       foreach ($query->result () as $art){
  //           $spec1 = "No Data";
  //       }
  //   }else{
  //       foreach ($query->result () as $art){
  //          $spec1 =  $art->dspec;
  //          array_push ($doctorListArray, $spec1);
  //       }
  //   }
  //   $lenof = sizeof($doctorListArray)
  //   $lenof = $lenof - 1;
  //   for ($i=0; $i < $lenof ; $i++) {

  //   $categoryList = array();
  //   $categoryListArray = array();
  //   $this->db->select('*');
  //   $this->db->from ('doctor');
  //   $this->db->where('dspec', $doctorListArray[i]);
  //   $query = $this->db->get ();

  //   if ($query->num_rows() < 0){
  //     foreach ($query->result () as $art){
  //       $categoryList['did'] = "No Data";
  //       $categoryList['dname'] = "No Data";

  //      array_push ($categoryListArray, $categoryList);
  //     }
  //     return $categoryListArray;
  //     }else{
  //     foreach ($query->result () as $art){

  //     $categoryList['did'] = $art->did;
  //     $categoryList['dname'] = $art->dname;

  //      array_push ($categoryListArray, $categoryList);
  //       }
  //     //return $categoryListArray;
  //     }
  //   }

  // }

}
