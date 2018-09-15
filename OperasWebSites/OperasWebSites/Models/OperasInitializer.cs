using System.Data.Entity;
using System.Collections.Generic;

namespace OperasWebSites.Models
{
    public class OperasInitializer: DropCreateDatabaseIfModelChanges<OperasDB>
    {
        protected override void Seed(OperasDB context)
        {
            base.Seed(context);
            var operas = new List<Opera>
            {
                new Opera
                {
                    Title = "Cosi Fan Tutte",
                    Year = 1790,
                    Composer = "Mozart"
                }
            };
            operas.ForEach(s => context.Operas.Add(s));
            context.SaveChanges();
        }
    }
}