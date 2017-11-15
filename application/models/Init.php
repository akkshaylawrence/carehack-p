<?PHP

class Init extends CI_Model {

    function __construct () {
        parent::__construct ();
    }
    function initPath ($contoller_path='') {
        $data["base_url"]   = $this->config->item ("base_url");
        $data["css"]     = $this->config->item ("css");
        $data["js"] = $this->config->item ("js");
        $data["images"]     = $this->config->item ("images");
        $data["path"]       = $data["base_url"] . $contoller_path;
        //$data["uploadpath"] = $this->config->item ("uploadpath");
        //$data['uploads']    = $this->config->item ("datafile_path_vendor_uploads");//"/vendoruploads";
        //$data["ajaxpath"]   = $this->config->item ("ajaxpath");
       $data["title"] = "";
       // $status = "school";

       //  // $data = $this->init->initPath ('/article');
       //      // $response['status'] = FALSE;
       //      // $response['msg'] =  "No Data Fetched";
       //      // $response['statusID'] = 0;
       //      // $response['count'] = 0;
       //      // $response['data'] = NULL;
       //  // log_message('info',print_r($cid,TRUE));
       //   $category = $this->data->fetchCategoryList("1");
       //    // log_message('info',print_r($category,TRUE));
       //  if ($category){
       //      // $response['count'] = $articles['count'];
       //      $data['category'] = $category;
       //      return $data;
       //  }else{
       //   //   echo json_encode ($response);
       //      return 0;
       //  }
       return $data;
    } 
    function initPath2 ($contoller_path='', $aid='') {
        $data["base_url"]   = $this->config->item ("base_url");
        $data["css"]     = $this->config->item ("css");
        $data["js"] = $this->config->item ("js");
        $data["images"]     = $this->config->item ("images");
        $data["path"]       = $data["base_url"] . $contoller_path;
        //$data["uploadpath"] = $this->config->item ("uploadpath");
        //$data['uploads']    = $this->config->item ("datafile_path_vendor_uploads");//"/vendoruploads";
        //$data["ajaxpath"]   = $this->config->item ("ajaxpath");
        $data["title"]      = "";

        // $data = $this->init->initPath ('/article');
            // $response['status'] = FALSE;
            // $response['msg'] =  "No Data Fetched";
            // $response['statusID'] = 0;
            // $response['count'] = 0;
            // $response['data'] = NULL;
        // log_message('info',print_r($cid,TRUE));
        $articles = $this->data->fetchArticleByAid($aid);
        // log_message('info',print_r($articles,TRUE));
        // log_message('info',"inarticlehllo");
        if ($articles){
            // $response['count'] = $articles['count'];
            $data['meta'] = $articles;
            return $data;
        }else{
            // echo json_encode ($response);
            return 0;
        }
    } 
public function generateSpecialCondition($conditionArray){
        $query = false;
        foreach($conditionArray as $key=>$value){
            if(!$query){
                $query = "(";
            }
            else{
                $query = $query . " OR ";
            }
            $query = $query." ". $key." LIKE '%".$this->db->escape_like_str($value)."%' ";
        }
        if($query){
                $query = $query.")";
         }
        return $query;
        }
}

