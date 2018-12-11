using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace PatientData.Models
{
    public static class PatientDb
    {
        public static IMongoCollection<Patient> Open()
        {
            var client = new MongoClient("mongodb://kuhlin:<Passworrd>@cluster0-shard-00-00-zo3ut.mongodb.net:27017,cluster0-shard-00-01-zo3ut.mongodb.net:27017,cluster0-shard-00-02-zo3ut.mongodb.net:27017/PatientDb.PatientDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
            //var client = new MongoClient("mongodb + srv://kuhlin:<MongoDB%23Dragon25>@cluster0-zo3ut.mongodb.net/test?retryWrites=true");

            var db = client.GetDatabase("PatientDb");
            return db.GetCollection<Patient>("Patients");
        }
    }
}
