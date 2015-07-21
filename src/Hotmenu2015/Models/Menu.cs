using System.Collections.Generic;
using System.Runtime.Serialization;

namespace HotmenuApp.Models
{
    [DataContract]
    public class Menu
    {
        [DataMember]
        public List<Category> Categories { get; set; }
        [DataMember]
        public List<MenuItem> MenuItems { get; set; }
    }
}