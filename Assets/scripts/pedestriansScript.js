public var speed : int = 2;

function Start () {
	
}

function Update () {
	var r2d = GetComponent("Rigidbody2D");
	r2d.velocity.x = 0;
}

function OnBecameInvisible() {
    // Destroy the enemy
    Destroy(gameObject);
} 