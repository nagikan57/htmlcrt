
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace html_create
{
    class Program
    {
        static void Main(string[] args)
        {
          
            //read template
            StreamReader sr = new StreamReader(@"D:\workspace\html_create\data\low_area_temp.html", Encoding.GetEncoding("UTF-8"));
            string low_temp = sr.ReadToEnd();
            sr.Close();
            Console.Write(low_temp);

            LowArea low = new LowArea();
            low.create(low_temp);




        }

    }


   
}

