using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hamburger : MonoBehaviour
{
    public float speed;
    public GameObject effect;
    public AudioClip[] clip; 
    public float volume = 1f;

	void Update () {
        transform.Translate(Vector2.left * speed * Time.deltaTime);
	}

    private void OnTriggerEnter2D(Collider2D other)
    {
        Vector3 cameraZPos = new Vector3(transform.position.x,transform.position.y,Camera.main.transform.position.z);

        if (other.CompareTag("Player")) {
            int rand = Random.Range(0, clip.Length);
            AudioSource.PlayClipAtPoint(clip[rand],new Vector3(0,0,-10),volume);
            other.GetComponent<Player>().health++;
            other.GetComponent<Player>().camAnim.SetTrigger("shake");
            Instantiate(effect, transform.position, Quaternion.identity);
            Destroy(gameObject);
        }   
    }
}
