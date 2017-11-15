<?PHP

class Data extends CI_Model {

    function __construct () {
        parent::__construct ();
    }
    
    //General Functions --------------------------------------

    function fetchDoctorBySpec ($spec) {
     $categoryList = array();
      $categoryListArray = array();
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
    function fetchSlot ($bdate,$doctor) {

     $categoryList = array();
      $categoryListArray = array();
      $this->db->where('adate', $bdate);
       $this->db->where('adid', $doctor);
      $num_rows = $this->db->count_all_results('appointment');

  log_message("info",'appointments for that day');
  log_message('info',$num_rows);

      return $num_rows;
     //  }
    }
    function fetchSpec () {
      $doctorList = array();
      $doctorListArray = array();
      $this->db->select('dspec');
      $this->db->from ('doctor');
      $this->db->distinct();
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $doc){
        $doctorList['dspec'] = "No Data";
        // $categoryList['category'] = "No Data";
        // $categoryList['cstatus'] = "No Data";

       array_push ($doctoryListArray, $doctorList);
      }
      return $doctorListArray;
      }else{
      foreach ($query->result () as $doc){
          
        $doctorList['dspec'] = $doc->dspec;
        // $categoryList['cstatus'] = $art->cstatus;

       array_push ($doctorListArray, $doctorList);
        }
      return $doctorListArray;
      }
    }















     function fetchCategoryList2 () {
      $categoryList = array();
      $categoryListArray = array();
      $this->db->select('*');
      $this->db->from ('tdb_category');
      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['cid'] = "No Data";
        $categoryList['category'] = "No Data";
        $categoryList['cstatus'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){
          
       $categoryList['cid'] = $art->catid;
        $categoryList['category'] = $art->category;
        $categoryList['cstatus'] = $art->cstatus;

       array_push ($categoryListArray, $categoryList);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $categoryListArray;
      }
    }

      function fetchSearch1 ($searchr) {
      log_message('info','where = ');
      log_message('info',$searchr);
       $articleData = array();
        $articleDataList = array();
      $this->db->select('*');
      $this->db->from ('tdb_article');
      $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
       $this->db->like('mainheading', $searchr);
     $query    = $this->db->get ();
         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['interviewee'] = "No Data";
          $aticleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";

       array_push ($articleDataList, $articleData);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){
          
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
           $articleData['color'] = $art->color;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['interviewee'] = $art->interviewee;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;

       array_push ($articleDataList, $articleData);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $articleDataList;
      }
    }

    function subscribedbdata ($tosubemail) {
      $data = array(
          'emailid' => $tosubemail,
          'estatus' => "1",
      );
      $to = $article['emailid'];
      $this->db->insert('tdb_newsletter', $data);
      $userData = $this->data->sendmail($to);
      return 1;
    }

  function sendmail($to){
     log_message('info','kabir2!');
        log_message('info','$namedd '.$to);
          $toadmin = "mazahirharoon@gmail.com";      
            
        //reply to user
        $headers ="From:<$toadmin>\n";
    $headers.="MIME-Version: 1.0\n";
    $headers.="Content-type: text/html; charset=iso 8859-1";
    "Reply-To: rihazam786@gmail.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    $subject = 'Confirmation Mail (The DayBreak)';
    $body = ("<strong>Dear Reader</strong>,");
    $body.= "<br>";
    $body.= ("We will kepp you updated with our latest news");
    $body.= "<br>";
    $body.= "<br>";
    $body.= "<br>";
    $body.= "Sincerely,";
    $body.= "<br>";
    $body.= "<br>";
    $body.= "<strong>The DayBreak Team</strong>";
    
    //email to admin
    $admin_headers ="From:<$to>\n";
    $admin_headers.="MIME-Version: 1.0\n";
    $admin_headers.="Content-type: text/html; charset=iso 8859-1";
    "Reply-To: mazahirharoon@gmail.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    $admin_subject = 'Confirmation Mail - The DayBreak Team';
    $admin_body = ("<strong>Dear Sir,</strong>,");
    $admin_body.= "<br>";
    $admin_body.= ("You have one new Subscriber!");
    $admin_body.= "<br>";
    $admin_body.= ("<strong>Email: </strong>".$to);
    $admin_body.= "<br>";
    $admin_body.= "<br>";
    $admin_body.= "<br>";
    $admin_body.= "Sincerely,";
    $admin_body.= "<br>";
    $admin_body.= "<br>";
    $admin_body.= "<strong>The DayBreak Admin Panel</strong>";
    

    

    mail($to,$subject,$body,$headers,"-f$to");
    mail($toadmin,$admin_subject,$admin_body,$admin_headers,"-f$to");
      } 

  
  function sendanmail($to){
     log_message('info','kabir2!');
          $toadmin = "mazahirharoon@gmail.com";      
            
        //reply to user
        $headers ="From:<$toadmin>\n";
    $headers.="MIME-Version: 1.0\n";
    $headers.="Content-type: text/html; charset=iso 8859-1";
    "Reply-To: rihazam786@gmail.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    $subject = 'Confirmation Mail (The DayBreak)';
    $body = ("<strong>Dear Reader</strong>,");
    $body.= "<br>";
    $body.= ("The article you have sent is approved and is published in out Website.");
    $body.= "<br>";
    $body.= ("ll the best! and Keep Writing");
    $body.= "<br>";
    $body.= "<br>";
    $body.= "Sincerely,";
    $body.= "<br>";
    $body.= "<br>";
    $body.= "<strong>The DayBreak Team</strong>";
  
    mail($to,$subject,$body,$headers,"-f$to");
      }  

    // Home Page functions --------------------------------
    function fetchHome ($ctype) {
      log_message('info',$ctype);
      log_message('info',"ula");
        $articleData = array();
        $articleDataList = array();
        log_message('info',"buhh");
        $icount = 0;
        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('ctype', $ctype);
        $this->db->or_where('ctype','interview');
         $this->db->or_where('ctype','editorial');
          $this->db->or_where('ctype','column');
        $this->db->order_by("date", "desc");
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['interviewee'] = "No Data";
          $aticleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        $icheck = 0;
        foreach ($query->result () as $art){
          if(($art->ctype)=="interview"){
            if($icheck==0){
            log_message('info','oruvan');
            log_message('info',$art->aid);
          $articleData['icount'] = $icount++;
          $articleData['iaid'] = $art->aid;
          $articleData['icid'] = $art->cid;
          $articleData['icategory'] = $art->category;
           $articleData['icolor'] = $art->color;
          $articleData['imainheading'] = $art->mainheading;
          $articleData['interviewee'] = $art->interviewee;
          $articleData['iimage'] = $art->image;
          $articleData['iplace'] = $art->place;
          $articleData['isubheading'] = $art->subheading;
          $articleData['iauthor'] = $art->author;
          $articleData['idate'] = $art->date;
          $articleData['iarticle'] = $art->article;
          $articleData['iastatus'] = $art->astatus;
             log_message('info',$articleData['idate']);
             log_message('info',$articleData['interviewee']);
             $icheck = 1;
            // array_push ($articleDataList, $articleData);
          }
        }else{
            // log_message('info','poi');
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
          $articleData['color'] = $art->color;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;
          log_message('info','jaaa');
          log_message('info',$articleData['count']);
          log_message('info',$articleData['mainheading']);
          //end category fetch 
          array_push ($articleDataList, $articleData);
        }
        }
        }
        log_message('info','ithu vere');
         // log_message('info','articleDataList '.$this->db->last_query());
         // log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }
    function fetchSurprise() {
        $articleData = array();
        $articleDataList = array();
        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('astatus', "1");
        $this->db->order_by('aid', 'RANDOM');
         $query    = $this->db->get ();
         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['interviewee'] = "No Data";
          $aticleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";

       array_push ($articleDataList, $articleData);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){
          
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
          $articleData['color'] = $art->color;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['nterviewee'] = $art->interviewee;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;

       array_push ($articleDataList, $articleData);

        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $articleDataList;
      }
    }

    function fetchEvent () {
      log_message('info','usA');
        $eventData = array();
        $eventDataList = array();
        // $dd = strtotime('-1 days');
        log_message('info',"thaskaran");
        // log_message('info',$dd);
        log_message('info',"yuhaggevent yuha");
        $this->db->select('*');
        $this->db->from('tdb_event');
        $this->db->where('estatus', "1");
        $this->db->order_by("eventdatetime", "desc");
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $eventData['eid'] = "No Data";
          $eventData['eventname'] = "No Data";
          $eventData['etype'] = "No Data";
          $eventData['eventdatetime'] = "No Data";
          $eventData['eventenddatetime'] = "No Data";
          $aticleData['eventplace'] = "No Data";
          $eventData['eventdetails'] = "No Data";
          $eventData['estatus'] = "No Data";
          $eventData['image'] = "No Data";
          array_push ($eventDataList, $eventData);
      }
        return $eventDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $eventData['count'] = $count++;
          $eventData['eid'] = $art->eid;
          $eventData['eventname'] = $art->eventname;
          $eventData['etype'] = $art->etype;
          $eventData['eventdatetime'] = $art->eventdatetime;
          $eventData['eventenddatetime'] = $art->eventenddatetime;
          $aticleData['eventplace'] = $art->eventplace;
          $eventData['eventdetails'] = $art->eventdetails;
          $eventData['estatus'] = $art->estatus;
          $eventData['image'] = $art->image;
          log_message('info',"pepsi3");
          log_message('info',$eventData['eventname']);
          //end category fetch 
          array_push ($eventDataList, $eventData);
        }
         // log_message('info','eventDataList '.$this->db->last_query());
         //  log_message('info',print_r($eventDataList,TRUE));
        return $eventDataList;
      }
    }
    function fetchSchool ($cid) {
      log_message('info','in fetchschool');
        $schoolData = array();
        $schoolDataList = array();
        $this->db->select('*');
        $this->db->from('tdb_article');
        // $this->db->join('tdb_category', 'tdb_category.cid = tdb_school.cid');
        $this->db->where('cid', $cid);
        $this->db->order_by("date", "desc");
   
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
         $schoolData['aid'] = "No Data";
          $schoolData['cid'] = "No Data";
          $schoolData['category'] = "No Data";
          $schoolData['mainheading'] = "No Data";
          $schoolData['image'] = "No Data";
          $schoolData['place'] = "No Data";
          $schoolData['subheading'] = "No Data";
          $schoolData['author'] = "No Data";
          $schoolData['date'] = "No Data";
          $schoolData['article'] = "No Data";
          $schoolData['astatus'] = "No Data";
          array_push ($schoolDataList, $schoolData);
      }
        return $schoolDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $schoolData['count'] = $count++;
          $schoolData['aid'] = $art->aid;
          $schoolData['cid'] = $art->cid;
          $schoolData['mainheading'] = $art->mainheading;
          $schoolData['image'] = $art->image;
          $schoolData['place'] = $art->place;
          $schoolData['subheading'] = $art->subheading;
          $schoolData['author'] = $art->author;
          $schoolData['date'] = $art->date;
          $schoolData['article'] = $art->article;
          $schoolData['astatus'] = $art->astatus;
          //end category fetch 
          array_push ($schoolDataList, $schoolData);
        }
         // log_message('info','schoolDataList '.$this->db->last_query());
         //  log_message('info',print_r($schoolDataList,TRUE));
        return $schoolDataList;
      }
    }
    // Home Page functions ends here ----------------------


    // Article Page functions ------------------------------
    function fetchArticleByAid ($aid) {
      log_message('info',"entered in here");
        $articleData = array();
        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('tdb_article.aid', $aid);
        
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['useremail'] = "No Data";
          $articleData['dbetype'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['mainheading'] = "No Data";
           $articleData['interviewee'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['imgtext'] = "No Data";
          $articleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";
      }
        return $articleData;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
            
          $articleData['sl'] = ++$count;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['useremail'] = $art->useremail;
          $articleData['dbetype'] = $art->dbetype;
          $articleData['category'] = $art->category;
          $articleData['interviewee'] = $art->interviewee;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['image'] = $art->image;
          $articleData['imgtext'] = $art->imgtext;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;
          log_message('info',"entered in here");
        }
         // log_message('info','articleDataList '.$this->db->last_query());
       //  log_message('info',print_r($promoListDataList,TRUE));
        return $articleData;
      }
    }

    function fetchSideHeadlines ($aid) {
        $articleData = array();
        $articleDataList = array();
        log_message('info',"yuha yuha");
        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('aid  !=', $aid);
        $this->db->where('ctype  !=', "school");
   
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $aticleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
          $articleData['color'] = $art->color;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;
          //end category fetch 
          array_push ($articleDataList, $articleData);
        }
        }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }
     function fetchSideSchoolHeadlines ($aid) {
        $articleData = array();
        $articleDataList = array();
        log_message('info',"yuha yuha");
        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('ctype', "school");
        $this->db->where('aid  !=', $aid);
   
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color']  = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $aticleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
          $articleData['color'] = $art->color;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;
          //end category fetch 
          array_push ($articleDataList, $articleData);
        }
        }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }

    // Article Page functions ------------------------------


    // Event Page functions ------------------------------
    function fetchEventByEid ($eid) {
        $articleData = array();
        $this->db->select('*');
        $this->db->from('tdb_event');
        $this->db->where('tdb_event.eid', $eid);
        
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $eventData['eid'] = "No Data";
          $eventData['etype'] = "No Data";
          $eventData['eventname'] = "No Data";
          $eventData['eventdatetime'] = "No Data";
          $eventData['eventenddatetime'] = "No Data";
          $eventData['eventplace'] = "No Data";
          $eventData['eventdetails'] = "No Data";
          $eventData['image'] = "No Data";
          $eventData['estatus'] = "No Data";
      }
        return $eventData;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
            
          $eventData['sl'] = ++$count;
          $eventData['eid'] = $art->eid;
          $eventData['etype'] = $art->etype;
          $eventData['eventname'] = $art->eventname;
          $eventData['eventdatetime'] = $art->eventdatetime;
          $eventData['eventenddatetime'] = $art->eventenddatetime;
          $eventData['eventplace'] = $art->eventplace;
          $eventData['eventdetails'] = $art->eventdetails;
          $eventData['image'] = $art->image;
          $eventData['estatus'] = $art->estatus;
        }
         // log_message('info','articleDataList '.$this->db->last_query());
       //  log_message('info',print_r($promoListDataList,TRUE));
        return $eventData;
      }
    }
    function fetchSideEvents ($eventname) {
        $eventData = array();
        $eventDataList = array();
        log_message('info',"yuha yuha");
        $this->db->select('*');
        $this->db->from('tdb_event');
        $this->db->where('eventname  !=', $eventname);
   
        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
           $eventData['eid'] = "No Data";
          $eventData['etype'] = "No Data";
          $eventData['eventname'] = "No Data";
          $eventData['eventdatetime'] = "No Data";
          $eventData['eventenddatetime'] = "No Data";
          $eventData['eventplace'] = "No Data";
          $eventData['eventdetails'] = "No Data";
          $eventData['image'] = "No Data";
          $eventData['estatus'] = "No Data";
   
          array_push ($eventDataList, $eventData);
      }
        return $eventDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $eventData['sl'] = ++$count;
          $eventData['eid'] = $art->eid;
          $eventData['etype'] = $art->etype;
          $eventData['eventname'] = $art->eventname;
          $eventData['eventdatetime'] = $art->eventdatetime;
          $eventData['eventenddatetime'] = $art->eventenddatetime;
          $eventData['eventplace'] = $art->eventplace;
          $eventData['eventdetails'] = $art->eventdetails;
          $eventData['image'] = $art->image;
          $eventData['estatus'] = $art->estatus;
          //end category fetch 
          array_push ($eventDataList, $eventData);
        }
        }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($eventDataList,TRUE));
        return $eventDataList;
    }

        function fetchEventforCat ($etype) {
        $eventData = array();
        $eventDataList = array();

        $this->db->select('*');
        $this->db->from('tdb_event');
        $this->db->where('etype', $etype);
        $this->db->where('estatus', "1");
        $this->db->order_by("eventdatetime", "desc");

        $query    = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $eventData['eid'] = "No Data";
          $eventData['etype'] = "No Data";
          $eventData['eventname'] = "No Data";
          $eventData['eventdatetime'] = "No Data";
          $eventData['eventenddatetime'] = "No Data";
          $eventData['eventplace'] = "No Data";
          $eventData['eventdetails'] = "No Data";
          $eventData['image'] = "No Data";
          $eventData['estatus'] = "No Data";
           array_push ($eventDataList, $eventData);
      }
        return $eventDataaList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
            
          $eventData['count'] = ++$count;
          $eventData['eid'] = $art->eid;
          $eventData['etype'] = $art->etype;
          $eventData['eventname'] = $art->eventname;
          $eventData['eventdatetime'] = $art->eventdatetime;
          $eventData['eventenddatetime'] = $art->eventenddatetime;
          $eventData['eventplace'] = $art->eventplace;
          $eventData['eventdetails'] = $art->eventdetails;
          $eventData['image'] = $art->image;
          $eventData['estatus'] = $art->estatus;
           array_push ($eventDataList, $eventData);
        }
         // log_message('info','articleDataList '.$this->db->last_query());
       //  log_message('info',print_r($promoListDataList,TRUE));
        return $eventDataList;
      }
    }
    // Event Page functions ends here ------------------------------
    

    // Category Page functions ------------------------------
    function fetchArticleByCid ($category) {
        $articleData = array();
        $articleDataList = array();
        $articleData['category'] = $category;

        $this->db->select('*');
        $this->db->from('tdb_category');
        $this->db->where('category', $category);

        $cquery = $this->db->get ();
        foreach ($cquery->result () as $cart){
          $cid = $cart->catid;
        }

        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('cid', $cid);
        $this->db->where('astatus', "1");
        $this->db->order_by("date", "desc");

        $query = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['color'] = "No Data"; 
          $articleData['ctype'] = "No Data"; 
          $articleData['mainheading'] = "No Data";
           $articleData['interviewee'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['cstatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['color'] = $art->color;
          $articleData['ctype'] = $art->ctype;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['interviewee'] = $art->interviewee;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['cstatus'] = $art->astatus;
          $articleData['check'] = $art->aid;
          array_push ($articleDataList, $articleData);
        }
      }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }
    function fetchArticleByDBEtype () {
        $articleData = array();
        $articleDataList = array();

        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');
        $this->db->where('dbetype', "daybreak");
        $this->db->where('astatus', "1");
        $this->db->order_by("date", "desc");

        $query = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['color'] = "No Data"; 
          $articleData['ctype'] = "No Data"; 
          $articleData['mainheading'] = "No Data";
           $articleData['interviewee'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['cstatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
           $articleData['category'] = $art->category;
          $articleData['color'] = $art->color;
          $articleData['ctype'] = $art->ctype;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['interviewee'] = $art->interviewee;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['cstatus'] = $art->astatus;
          $articleData['check'] = $art->aid;
          array_push ($articleDataList, $articleData);
        }
      }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }
     function fetchArticleByCtype ($ctype) {
        $articleData = array();
        $articleDataList = array();
        $articleData['category'] = $ctype;
        $this->db->select('*');
        $this->db->from('tdb_category');
        $this->db->where('ctype', $ctype);

        $cquery = $this->db->get ();
        foreach ($cquery->result () as $cart){
          $cid = $cart->catid;
        }

        $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->where('cid', $cid);
        $this->db->order_by("date", "desc");

        $query = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['image'] = "No Data";
          $articleData['place'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['cstatus'] = "No Data";
   
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['count'] = $count++;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['image'] = $art->image;
          $articleData['place'] = $art->place;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['cstatus'] = $art->astatus;
          $articleData['check'] = $art->aid;
          array_push ($articleDataList, $articleData);
        }
      }
         // log_message('info','articleDataList '.$this->db->last_query());
         //  log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
    }

    // Data Table Sayan  ------------------------------
    public function categoryStatusChangerDB ($cid, $categoryStatus) {
      $this->db->set('cstatus', $categoryStatus);
      $this->db->where('cid', $cid);
      $this->db->update('tdb_category');
      // log_message('info','$cid'.$cid);
      // log_message('info','$categoryStatus'.$categoryStatus);
      // log_message('info','categoryStatusChangerDB '.$this->db->last_query());
      return ($this->db->affected_rows() > 0) ? TRUE : FALSE;
    }

    public function articleStatusChangerDB ($aid, $articleStatus) {
      $this->db->set('astatus', $articleStatus);
      $this->db->where('aid', $aid);
      $this->db->update('tdb_article');
      // log_message('info','$aid'.$aid);
      // log_message('info','$articleStatus'.$articleStatus);
      // log_message('info','articleStatusChangerDB '.$this->db->last_query());
      return ($this->db->affected_rows() > 0) ? TRUE : FALSE;
    }


    function fetchallCategoryList () {
      log_message('info','polpol');
      // log_message('info',$cstatus);
      $categoryList = array();
      $categoryListArray = array();
      $this->db->select('*');
      $this->db->from ('tdb_category');
      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['cid'] = "No Data";
        $categoryList['category'] = "No Data";
        $categoryList['cstatus'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){
          
       $categoryList['cid'] = $art->catid;
        $categoryList['category'] = $art->category;
        $categoryList['cstatus'] = $art->cstatus;

       array_push ($categoryListArray, $categoryList);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $categoryListArray;
      }
    }

         public function dtfetchArticleListCount($filter = array()){
      $this->db->select ('COUNT(aid) AS articleListCount');
        $this->db->from ('tdb_article');
  
        if (isset ($filter['groupByValue'])) {
            $this->db->select ('COUNT(aid) AS articleListCount');
            $this->db->group_by ('aid');
            $query = $this->db->get ();
            $countList = array();
            return $countList;
        }
        else {
            $query = $this->db->get ();
            $row   = $query->row ();
           //  ad
           //  log_message('info','$row->promoListCount '.$row->promoListCount);
            return $row->articleListCount;
        }
     }
  
     public function dtfetchArticleList ($filter = array()) {
        $result = array();
        $articleData = array();
        $articleDataList = array();
        
       $this->db->select('*');
        $this->db->from('tdb_article');
        $this->db->join('tdb_category', 'tdb_category.catid = tdb_article.cid');

       $start = 0;
  
        if (isset ($filter['length'])) {
          $this->db->limit ($filter['length'], $filter['start']);
          if (isset ($filter['length']))
            $start = $filter['start'];
        }
  
        if(isset($filter['search'])){
        
         $searchArr = array();
          $searchArr['mainheading'] = $filter['search'];
        
         $where = $this->init->generateSpecialCondition($searchArr);
          $this->db->where($where);
        }
        $query    = $this->db->get ();
        //  log_message('info','articleDataList '.$this->db->last_query());
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $articleData['aid'] = "No Data";
          $articleData['cid'] = "No Data";
          $articleData['category'] = "No Data";
          $articleData['mainheading'] = "No Data";
          $articleData['subheading'] = "No Data";
          $articleData['author'] = "No Data";
          $articleData['date'] = "No Data";
          $articleData['article'] = "No Data";
          $articleData['astatus'] = "No Data";
  
          array_push ($articleDataList, $articleData);
      }
        return $articleDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $articleData['sl'] = ++$count;
          $articleData['aid'] = $art->aid;
          $articleData['cid'] = $art->cid;
          $articleData['category'] = $art->category;
          $articleData['mainheading'] = $art->mainheading;
          $articleData['subheading'] = $art->subheading;
          $articleData['author'] = $art->author;
          $articleData['date'] = $art->date;
          $articleData['article'] = $art->article;
          $articleData['astatus'] = $art->astatus;
  
          array_push ($articleDataList, $articleData);
        }
        // log_message('info','category'.$art->category);
        // log_message('info',print_r($articleDataList,TRUE));
        return $articleDataList;
      }
    }

    public function dtfetchCategoryListCount($filter = array()){
      $this->db->select ('COUNT(cid) AS categoryListCount');
        $this->db->from ('tdb_category');
  
        if (isset ($filter['groupByValue'])) {
            $this->db->select ('COUNT(cid) AS categoryListCount');
            $this->db->group_by ('cid');
            $query = $this->db->get ();
            $countList = array();
            return $countList;
        }
        else {
            $query = $this->db->get ();
            $row   = $query->row ();
           //  ad
           //  log_message('info','$row->promoListCount '.$row->promoListCount);
            return $row->categoryListCount;
        }
     }
  
     public function dtfetchCategoryList ($filter = array()) {
        $result = array();
        $categoryData = array();
        $categoryDataList = array();
        
       $this->db->select('*');
        $this->db->from('tdb_category');

       $start = 0;
  
        if (isset ($filter['length'])) {
          $this->db->limit ($filter['length'], $filter['start']);
          if (isset ($filter['length']))
            $start = $filter['start'];
        }
  
        if(isset($filter['search'])){
        
         $searchArr = array();
          $searchArr['category'] = $filter['search'];
        
         $where = $this->init->generateSpecialCondition($searchArr);
          $this->db->where($where);
        }
        $query    = $this->db->get ();
        //  log_message('info','categoryDataList '.$this->db->last_query());
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $categoryData['cid'] = "No Data";
          $categoryData['category'] = "No Data";
          $categoryData['cstatus'] = "No Data";
  
          array_push ($categoryDataList, $categoryData);
      }
        return $categoryDataList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $categoryData['sl'] = ++$count;
          $categoryData['cid'] = $art->catid;
          $categoryData['category'] = $art->category;
          $categoryData['cstatus'] = $art->cstatus;
          
          array_push ($categoryDataList, $categoryData);
        }
        // // log_message('info','category'.$art->category);
        // log_message('info',print_r($categoryDataList,TRUE));
        return $categoryDataList;
      }
    }

  // Data Table Sayan functions ends here ------------------------------


  // User side functions ------------------------------
  function fetchCategoryListUser () {
      log_message('info','polpol');
      // log_message('info',$cstatus);
      $categoryList = array();
      $categoryListArray = array();
      $this->db->select('*');
      $this->db->from ('tdb_category');
      $this->db->where('ctype', "parents");
      $this->db->or_where('ctype', "students");
      $this->db->or_where('ctype', "teachers");
      //   if($filter['cstatus']!=null){
      //     $where = $filter['cstatus'];
      //     // log_message('info','where = '.$where);
      //     $this->db->where('cstatus', $where);
      //   }
     $query    = $this->db->get ();

         if ($query->num_rows() < 0){
      foreach ($query->result () as $art){
        $categoryList['cid'] = "No Data";
        $categoryList['category'] = "No Data";
        $categoryList['cstatus'] = "No Data";

       array_push ($categoryListArray, $categoryList);
      }
      return $categoryListArray;
      }else{
      foreach ($query->result () as $art){
          
       $categoryList['cid'] = $art->catid;
        $categoryList['category'] = $art->category;
        $categoryList['cstatus'] = $art->cstatus;

       array_push ($categoryListArray, $categoryList);
        }
       //  log_message('info',"ddddd");
       // log_message('info','articleDataList '.$this->db->last_query());
     //  log_message('info',print_r($promoListDataList,TRUE));
      return $categoryListArray;
      }
    }
    function insertUserArticle ($article) {
      $cid = $article['cid'];
      $data = array(
          'cid' => $article['cid'],
          'mainheading' => $article['mainheading'],
          'image' => $article['image'],
          'imgtext' => $article['imgtext'],
          'place' => $article['place'],
          'subheading' => $article['subheading'],
          'author' => $article['author'],
          'useremail' => $article['useremail'],
          'date' => $article['date'],
          'article' => $article['article'],
          'astatus' => $article['astatus']
      );
      $this->db->insert('tdb_article', $data);
      
    //   $this->db->select('*');
    //   $this->db->from ('tdb_category');
    //   $this->db->where('catid', $cid);
    //    $query    = $this->db->get ();

    //      if ($query->num_rows() < 0){
    //   foreach ($query->result () as $art){
    //     $category = "No Data";
    //   }
    //   return $categoryListArray;
    //   }else{
    //   foreach ($query->result () as $art){
    //   $category = $art->category;
    //     }
    //   }

    // $toadmin = "mazahirharoon@gmail.com";      
            
    // //email to admin
    // $admin_headers ="From:<$toadmin>\n";
    // $admin_headers.="MIME-Version: 1.0\n";
    // $admin_headers.="Content-type: text/html; charset=iso 8859-1";
    // "Reply-To: rihazam786@gmail.com" . "\r\n" .
    // "X-Mailer: PHP/" . phpversion();
    // $admin_subject = 'Article Notification - The DayBreak Admin Panel';
    // $admin_body = ("<strong>Dear Sir,</strong>,");
    // $admin_body.= "<br>";
    // $admin_body.= ("A new article has been added in ".$category." Category");
    // //$body.= "<br>";
    // // $body.= ("Name : ".);
    // $admin_body.= "<br>";
    // $admin_body.= ("<strong>Article: </strong>".$article['mainheading']);
    // $admin_body.= "<br>";
    // $admin_body.= ($article['subheading']);
    // $admin_body.= "<br>";
    // $admin_body.= "<br>";
    // $admin_body.= "Sincerely,";
    // $admin_body.= "<br>";
    // $admin_body.= "<br>";
    // $admin_body.= "<strong>The DayBreak Admin Panel</strong>";
    
    // //reply to User
    // $headers ="From:<$to>\n";
    // $headers.="MIME-Version: 1.0\n";
    // $headers.="Content-type: text/html; charset=iso 8859-1";
    // "Reply-To: mazahirharoon@gmail.com" . "\r\n" .
    // "X-Mailer: PHP/" . phpversion();
    // $subject = 'Confirmation Mail (The DayBreak)';
    // $body = ("<strong>Dear Sir/Madam,</strong>,");
    // $body.= "<br>";
    // $body.= ("Your article was received and will be forwaded to the editor soon!");
    // $body.= "<br>";
    // $body.= ("Stay Tuned to TheDayBreak Website for more info");
    // $body.= "<br>";
    // $body.= "<br>";
    // $body.= "Sincerely,";
    // $body.= "<br>";
    // $body.= "<br>";
    // $body.= "<strong>The DayBreak Team</strong>";
    
    // mail($to,$subject,$body,$headers,"-f$to");
    // mail($toadmin,$admin_subject,$admin_body,$admin_headers,"-f$to");

      // return ($this->db->affected_rows() != 1) ? false : true;
      
      $this->db->select('*');
      $this->db->from('tdb_article');
      $this->db->where('mainheading', $article['mainheading']);
      $query    = $this->db->get ();
        foreach ($query->result () as $art){
          $articleData = $art->aid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }

      return $articleData;
    }

    public function insertUserImg($article, $hud)
    {  
      $data = array(
           'image' => $article
      );  
    $this->db->where('aid', $hud);
    $this->db->update('tdb_article', $data); 
    
    return $articleData;
    }
    // User Side functions ends here ------------------------------


    // Admin Side functions ------------------------------
    function insertArticle ($article) {
      $cid = $article['cid'];
      $data = array(
          'cid' => $article['cid'],
           'dbetype' => $article['dbetype'],
          'mainheading' => $article['mainheading'],
          'interviewee' => $article['interviewee'],
          'image' => $article['image'],
          'imgtext' => $article['imgtext'],
          'place' => $article['place'],
          'subheading' => $article['subheading'],
          'author' => $article['author'],
          'date' => $article['date'],
          'article' => $article['article'],
          'astatus' => $article['astatus']
      );
      $this->db->insert('tdb_article', $data);

      $data = array(
           'cstatus' => '1'
        );
      $this->db->where('catid', $cid);
      $this->db->where('ctype', 'news');
      $this->db->update('tdb_category', $data); 

      $this->db->select('*');
      $this->db->from('tdb_article');
      $this->db->where('mainheading', $article['mainheading']);
      $query    = $this->db->get ();
        foreach ($query->result () as $art){
          $articleData = $art->aid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }

      return $articleData;
    }
    // upload image of article
    public function insertImg($article, $hed)
    {
       log_message('info',"pothettan");
        // $hoo = $this->db->insert_id('aid');
        // log_message('info',"hooli");
        // log_message('info',$hoo);
        
         $data = array(
           'image' => $article
        );
    $this->db->where('aid', $hed);
    $this->db->update('tdb_article', $data); 
    
    return $articleData;
    }

     public function updateImg($article, $aid)
    {
       log_message('info',"pothettan");
       log_message('info',$aid);
     
         $data = array(
           'image' => $article
        );
    $this->db->where('aid', $aid);
    $this->db->update('tdb_article', $data); 
    
    return 1;
    }

    function insertPhotoDetails ($photo) {
      $data = array(
          'galid' => $photo['galid'],
          'galdesc' => $photo['galdesc'],
          'galstatus' => $photo['galstatus'],
          'galurl' => 'temp',
      );
      $this->db->insert('tdb_gallery', $data);

      return ($this->db->affected_rows() != 1) ? false : true;
    }

    function insertPhoto ($photo, $hed) {
       log_message('info',"phooto");
      log_message('info',$photo);
      log_message('info',$hed);
        $this->db->select('*');
        $this->db->from ('tdb_gallery');
        $this->db->where('galdesc', $hed);
        $query    = $this->db->get ();
        $count = 0;
        foreach ($query->result () as $art){
          $articleData = $art->galid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }
        $hoo = $this->db->insert_id('aid');
        log_message('info',"hooola");
        log_message('info',$hoo);
        
         $data = array(
           'galurl' => $photo
        );
    $this->db->where('galdesc', $hed);
    $this->db->update('tdb_gallery', $data); 
    
    return $articleData;
    }
  function updateArticle ($article) {
    log_message('info',"hoho");
      $aid = $article['aid'];
      $data = array(
          'cid' => $article['cid'],
          'mainheading' => $article['mainheading'],
          'interviewee' => $article['interviewee'],
          //'image' => $article['image'],
          'imgtext' => $article['imgtext'],
          'place' => $article['place'],
          'subheading' => $article['subheading'],
          'author' => $article['author'],
          'date' => $article['date'],
          'article' => $article['article'],
          'astatus' => $article['astatus']
      );
       $this->db->where('aid', $aid);
      $this->db->update('tdb_article', $data); 
     
      return ($this->db->affected_rows() != 1) ? false : true;
    }
    //gallery
     function fetchGallery () {
        $photo = array();
        $photoList = array();

        $this->db->select('*');
        $this->db->from('tdb_gallery');
        $this->db->where('galstatus', "1");
        $this->db->order_by("galid", "desc");

        $query = $this->db->get ();
   
            if ($query->num_rows() < 0){
        foreach ($query->result () as $art){
          $photo['galid'] = "No Data";
          $photo['galurl'] = "No Data";
          $photo['galdesc'] = "No Data"; 
          $photo['galstatus'] = "No Data";
          array_push ($photoList, $photo);
      }
        return $photoList;
      }else{
        $count = 0;
        foreach ($query->result () as $art){
          $photo['galid'] = $art->galid;
          $photo['galurl'] = $art->galurl;
          $photo['galdesc'] = $art->galdesc;
          $photo['galstatus'] = $art->galstatus;
          array_push ($photoList, $photo);
        }
      }
         // log_message('info','photoList '.$this->db->last_query());
         //  log_message('info',print_r($photoList,TRUE));
        return $photoList;
    }

    function insertEvent ($article) {
      $cid = $article['eid'];
      $data = array(
          'eid' => $article['eid'],
          'etype' => $article['etype'],
          'eventname' => $article['eventname'],
          'eventdatetime' => $article['eventdatetime'],
          'eventenddatetime' => $article['eventenddatetime'],
          'eventplace' => $article['eventplace'],
          'eventdetails' => $article['eventdetails'],
          'estatus' => $article['estatus']
      );
      $this->db->insert('tdb_event', $data);

      // $data = array(
      //      'estatus' => '1'
      //   );
      // $this->db->where('eid', $cid);
      // $this->db->update('tdb_category', $data); 
      // return ($this->db->affected_rows() != 1) ? false : true;
      return 1;
    }
    //image of event
     public function inserteventImg($article, $hed)
    {
      // log_message('info',"nkjnkjm");
      // log_message('info',$article);
      log_message('info',$hed);
        $this->db->select('*');
        $this->db->from ('tdb_event');
        $this->db->where('eventname', $hed);
        $query    = $this->db->get ();
        $count = 0;
        foreach ($query->result () as $art){
          $eventData = $art->eid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }
        $hoo = $this->db->insert_id('eid');
        log_message('info',"hooola");
        log_message('info',$hoo);
        
         $data = array(
           'image' => $article
        );
    $this->db->where('eventname', $hed);
    $this->db->update('tdb_event', $data); 
    
    return $eventData;
    }
   
    function insertCategory ($article) {
      $data = array(
          'category' => $article['category'],
          'cstatus' => $article['cstatus']
      );
        $this->db->insert('tdb_category', $data);
        $this->db->select_max('catid');
        $this->db->from ('tdb_category');
        $query    = $this->db->get ();
        $count = 0;
        foreach ($query->result () as $art){
          $articleData = $art->catid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }
      return ($this->db->affected_rows() != 1) ? false : $article['category'];
    }
     function insertCategoryandProceed ($article) {
      $data = array(
          'category' => $article['category'],
          'cstatus' => $article['cstatus']
      );
        $this->db->insert('tdb_category', $data);
        $this->db->select_max('catid');
        $this->db->from ('tdb_category');
        $query    = $this->db->get ();
        $count = 0;
        foreach ($query->result () as $art){
          $articleData = $art->catid;
          // log_message('info',"kokachi2");
          // log_message('info',$articleData);
        }
      return ($this->db->affected_rows() != 1) ? false : $articleData;
    }

    // public function do_upload()
    //     {
    //             $config['upload_path']          = './uploads/';
    //             $config['allowed_types']        = 'gif|jpg|png';
    //             $config['max_size']             = 100000;
    //             $config['max_width']            = 4024;
    //             $config['max_height']           = 2768;

    //            $this->load->library('upload', $config);

    //            if ( ! $this->upload->do_upload('userfile'))
    //             {
    //                     $error = array('error' => $this->upload->display_errors());

    //                    $this->load->view('upload_form', $error);
    //             }
    //             else
    //             {
    //                     $data = array('upload_data' => $this->upload->data());
    //                     $rsp['status'] = True;
    //                     $rsp['msg'] =  "Success";
    //                     $rsp['statusID'] = 1;
    //                     $rsp['data'] = NULL;
    //                     echo json_encode ($rsp);
    //             }
    //     }
  
    function editArticle ($article) {
    //here
    }
}