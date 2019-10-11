using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawn : MonoBehaviour {

    public GameObject[] obstacle;

    private void Start()
    {
        int rand = Random.Range(0, obstacle.Length);
        Instantiate(obstacle[rand], transform.position, Quaternion.identity);
    }
}
