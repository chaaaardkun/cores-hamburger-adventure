using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawn : MonoBehaviour {

    public GameObject[] obstacle;

    private void Start()
    {
        int probability = Random.Range(1, 101);
        int randUps;
        int obsEffect;

        if (probability >=95){
            randUps = Random.Range(1,3);
            spawnObstacle(randUps);
        }
        else{
            obsEffect = 0;
            spawnObstacle(obsEffect);
        }   
    }

    private void spawnObstacle(int obsEffect){
        Instantiate(obstacle[obsEffect], transform.position, Quaternion.identity);
    }
}
