using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour {

    private float timeBtwSpawns;
    public float startTimeBtwSpawns;
    public float timeDecrease;
    public float minTime;
    public float counter = 0;
    public float speed = 20F;

    public GameObject[] obstacleTemplate;

    private void Start()
    {
        timeBtwSpawns = startTimeBtwSpawns;
    }

    private void Update()
    {
        Obstacle.speed = speed;
        Hamburger.speed = speed;
        counter += Time.deltaTime;
        if (counter >= 10 && speed < 200) {
            speed += 5F;
            counter = 0;
        }
        if (timeBtwSpawns <= 0)
        {
            int posRand = Random.Range(0, obstacleTemplate.Length);
            Instantiate(obstacleTemplate[posRand], transform.position, Quaternion.identity);
            timeBtwSpawns = startTimeBtwSpawns;
            if (startTimeBtwSpawns > minTime) {
                startTimeBtwSpawns -= timeDecrease;
            }
        }
        else {
            timeBtwSpawns -= Time.deltaTime;
        }
    }

}
