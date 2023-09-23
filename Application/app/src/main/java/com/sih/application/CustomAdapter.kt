package com.sih.application

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class CustomAdapter(private val dataList : ArrayList<Posts>) :
    RecyclerView.Adapter<CustomAdapter.MyViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val itemView = inflater.inflate(R.layout.custom_layout, parent, false)
        return MyViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val currentItem = dataList[position]
        holder.postImage.setImageResource(currentItem.post_image)
        holder.profile.setImageResource(currentItem.profile_image)
        holder.UserId.text = currentItem.userName

    }

    override fun getItemCount(): Int {
        return dataList.size
    }

    class MyViewHolder(itemView : View) : RecyclerView.ViewHolder(itemView){

        val profile : ImageView = itemView.findViewById(R.id.profileImg)
        val postImage : ImageView = itemView.findViewById(R.id.post)
        val UserId : TextView = itemView.findViewById(R.id.profileName)
    }
}