using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
// using UnityEngine.Advertisements;

public class Player : MonoBehaviour {

    public string gameId = "3323565";
    public bool testMode = true;


    public float speed;
    public float increment;
    public float maxY;
    public float minY;

    public GameObject scoreman;
    public int score;
    public int loadscore;
    public bool filefound = false;
    public Text scoredisp;
    public Text hiscore;
    public GameObject inGameUI;

    private Vector2 targetPos;

    public int health;

    public GameObject moveEffect;
    public Animator camAnim;
    public Text healthDisplay;

    public GameObject spawner;
    public GameObject restartDisplay;

    public AudioClip clip; 
    public float volume = 1f;

    private void Start(){
        //plays nice nice nice audio at start
        AudioSource.PlayClipAtPoint(clip,new Vector3(0,0,-10),volume);

        // Advertisement.Initialize(gameId, testMode);
    }

    private void Update()
    {

        if (health <= 0) {
            // Advertisement.Show();

            spawner.SetActive(false);
            score = scoreman.GetComponent<Score>().score;
            LoadPlayer();
            if(filefound == true)
            {
                if (loadscore < score)
                {
                    SavePlayer();
                }
            }
            else
            {
                SavePlayer();
                LoadPlayer();
            }
            restartDisplay.SetActive(true);
            scoredisp.text = score.ToString();
            inGameUI.SetActive(false);
            hiscore.text = loadscore.ToString();
            Destroy(gameObject);
        }

        healthDisplay.text = health.ToString();

        transform.position = Vector2.MoveTowards(transform.position, targetPos, speed * Time.deltaTime);

        if (Input.GetKeyDown(KeyCode.UpArrow) && transform.position.y < maxY) {
            Instantiate(moveEffect, transform.position, Quaternion.identity);
            targetPos = new Vector2(transform.position.x, transform.position.y + increment);
        } else if (Input.GetKeyDown(KeyCode.DownArrow) && transform.position.y > minY) {
            Instantiate(moveEffect, transform.position, Quaternion.identity);
            targetPos = new Vector2(transform.position.x, transform.position.y - increment);
        }
    }

    public void SavePlayer()
    {
        SaveSystem.SavePlayer(this);
    }

    public void LoadPlayer()
    {
        PlayerData data = SaveSystem.LoadPlayer();
        
        if (data == null)
        {
            filefound = false;
        }
        else
        {
            filefound = true;
            loadscore = data.score;
        }
            
    }
}
