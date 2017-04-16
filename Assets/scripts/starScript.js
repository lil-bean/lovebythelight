
public var speed : int = -5; 

function Start( ) { 
	var r2d = GetComponent("Rigidbody2D");
	r2d.velocity.y = -2;
} 

function OnBecameInvisible() {
    // Destroy the enemy
    Destroy(gameObject);
} 