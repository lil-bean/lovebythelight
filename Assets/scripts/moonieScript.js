#pragma strict

public var speed : int = 8;

public var tScore: UnityEngine.UI.Text; 
var score : int = 0;

function Start () {
		tScore.text = "score: 0";
}

function Update () {
	     if (Input.GetKey (KeyCode.UpArrow)) 
         	transform.Translate (Vector3(0,1,0) * Time.deltaTime*speed);
         if (Input.GetKey (KeyCode.DownArrow)) 
         	transform.Translate (Vector3(0,-1,0) * Time.deltaTime*speed);
         if (Input.GetKey (KeyCode.LeftArrow)) 
         	transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);
         if (Input.GetKey (KeyCode.RightArrow)) 
         	transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);

}

function OnCollisionEnter2D(coll: Collision2D) {
    if (coll.gameObject.tag == "Respawn"){
    	score = score + 1;
    	tScore.text = "score: " + score;
    }

    if (coll.gameObject.tag == "pedestrians"){
    	score = score - 3;
    	tScore.text = "score: " + score;
    }
              
}


