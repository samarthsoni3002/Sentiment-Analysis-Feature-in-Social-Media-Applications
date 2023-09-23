package com.sih.application

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.sih.application.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding : ActivityMainBinding
    private lateinit var newArrayList: ArrayList<Posts>
    private lateinit var recyclerView : RecyclerView
    lateinit var profile_pic : Array<Int>
    lateinit var post_pic : Array<Int>
    lateinit var user_name : Array<String>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        replaceFragment(Home())
        binding.bottomNavigationView.setOnItemSelectedListener{
            when(it.itemId){
                R.id.home -> replaceFragment(Home())
//                R.id.profile -> replaceFragment(Profile())
                else ->{

                }
            }
            true
        }
        profile_pic = arrayOf(
            R.drawable.person1,
            R.drawable.person2,
            R.drawable.person3
        )

        post_pic = arrayOf(
            R.drawable.person1,
            R.drawable.person2,
            R.drawable.person3
        )

        user_name = arrayOf(
            "kate",
            "cathy",
            "John"
        )

        recyclerView = findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.setHasFixedSize(true)

        newArrayList = arrayListOf<Posts>()
        getUserData()
    }

    private fun getUserData() {
        for(i in profile_pic.indices){
            val post = Posts(profile_pic[i], post_pic[i], user_name[i])
            newArrayList.add(post)
        }

        recyclerView.adapter = CustomAdapter(newArrayList)
    }

    private fun replaceFragment (fragment: Fragment){
        val fragmentManager = supportFragmentManager
        val fragmentTransaction = fragmentManager.beginTransaction()
        fragmentTransaction.replace(R.id.frameLayout,fragment)
        fragmentTransaction.commit()
    }
}