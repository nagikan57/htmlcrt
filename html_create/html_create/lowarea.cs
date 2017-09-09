using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace html_create
{
    class LowArea
    {
        

        public  static string other_string = "<li><a href=\"{1}\">{0}</a></li>";

        public  void create(string low_temp)
        {
            var low_list = read_low(low_temp);
            foreach (var rec in low_list)
            {
                if (!string.IsNullOrEmpty(rec.no))
                {
                    //URLからディレクトリ作成
                    var dic = rec.url.Split('/');
                    var direct = "";
                    var imgdirect = "";
                    for (int i = 0; i < dic.Length - 1; i++)
                    {
                        if (i > 0)
                        {
                            direct += @"\" + dic[i];
                            if (i < dic.Length - 2 && i > 2)
                            {
                                imgdirect += @"/" + dic[i];
                            }
                        }
                    }

                    string filename = dic[dic.Length - 1];
                    string areaname = filename.Split('.')[0];

                    var html = low_temp;
                    html = html.Replace("@area1", rec.area1);
                    html = html.Replace("@area2", rec.area2);
                    html = html.Replace("@area3", rec.area3);
                    html = html.Replace("@match", rec.match.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>").Replace("\r\n", "< br/>"));
                    html = html.Replace("@url", rec.url);
                    html = html.Replace("@ref_url", rec.ref_url);
                    html = html.Replace("@title", rec.title);
                    html = html.Replace("@desc", rec.desc);
                    html = html.Replace("@h1", rec.h1);
                    html = html.Replace("@tel", rec.tel);
                    html = html.Replace("@junkai", rec.junkai.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>").Replace("\r\n", "< br/>"));
                    html = html.Replace("@yago", rec.yago);
                    html = html.Replace("@img1", imgdirect + "/" + areaname + "_img01.png");
                    html = html.Replace("@midasi1", rec.midasi1);
                    html = html.Replace("@honbun1", rec.honbun1.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>"));
                    html = html.Replace("@img2", imgdirect + "/" + areaname + "_img02.png");
                    html = html.Replace("@midasi2", rec.midasi2);
                    html = html.Replace("@honbun2", rec.honbun2.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>").Replace("\r\n", "< br/>"));
                    html = html.Replace("@img3", imgdirect + "/" + areaname + "_img03.png");
                    html = html.Replace("@midasi3", rec.midasi3);
                    html = html.Replace("@honbun3", rec.honbun3.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>").Replace("\r\n", "< br/>"));
                    html = html.Replace("@img4", imgdirect + "/" + areaname + "_img04.png");
                    html = html.Replace("@midasi4", rec.midasi4);
                    html = html.Replace("@honbun4", rec.honbun4.Replace("\r\n", "< br/>").Replace("\r", "< br/>").Replace("\n", "< br/>").Replace("\r\n", "< br/>"));
                    html = html.Replace("@other", createOther(rec));
                    

                    
                    System.IO.DirectoryInfo di = System.IO.Directory.CreateDirectory(@"D:\workspace\html_create\output" + direct);
                    System.IO.StreamWriter sw = new System.IO.StreamWriter(
                        @"D:\workspace\html_create\output" + direct + @"\" + filename,
                        false,
                        System.Text.Encoding.GetEncoding("UTF-8"));
                    //TextBox1.Textの内容を書き込む
                    sw.Write(html);
                    //閉じる
                    sw.Close();

                }

            }
        }

        public static string createOther(LowCsvModel rec)
        {
            string ret = "";
            if (!string.IsNullOrEmpty(rec.other))
            {
                ret += "\r\n"+ string.Format(other_string,rec.other,rec.other_url);
            }

            if (!string.IsNullOrEmpty(rec.other2))
            {
                ret += "\r\n" + string.Format(other_string, rec.other2, rec.other2_url);
            }

            if (!string.IsNullOrEmpty(rec.other3))
            {
                ret += "\r\n" + string.Format(other_string, rec.other3, rec.other3_url);
            }

            if (!string.IsNullOrEmpty(rec.other4))
            {
                ret += "\r\n" + string.Format(other_string, rec.other4, rec.other4_url);
            }

            if (!string.IsNullOrEmpty(rec.other5))
            {
                ret += "\r\n" + string.Format(other_string, rec.other5, rec.other5_url);
            }

            if (!string.IsNullOrEmpty(rec.other6))
            {
                ret += "\r\n" + string.Format(other_string, rec.other6, rec.other6_url);
            }

            if (!string.IsNullOrEmpty(rec.other7))
            {
                ret += "\r\n" + string.Format(other_string, rec.other7, rec.other7_url);
            }

            if (!string.IsNullOrEmpty(rec.other8))
            {
                ret += "\r\n" + string.Format(other_string, rec.other8, rec.other8_url);
            }

            if (!string.IsNullOrEmpty(rec.other9))
            {
                ret += "\r\n" + string.Format(other_string, rec.other9, rec.other9_url);
            }

            if (!string.IsNullOrEmpty(rec.other10))
            {
                ret += "\r\n" + string.Format(other_string, rec.other10, rec.other10_url);
            }

            if (!string.IsNullOrEmpty(rec.other11))
            {
                ret += "\r\n" + string.Format(other_string, rec.other11, rec.other11_url);
            }

            if (!string.IsNullOrEmpty(rec.other12))
            {
                ret += "\r\n" + string.Format(other_string, rec.other12, rec.other12_url);
            }

            if (!string.IsNullOrEmpty(rec.other13))
            {
                ret += "\r\n" + string.Format(other_string, rec.other13, rec.other13_url);
            }

            if (!string.IsNullOrEmpty(rec.other14))
            {
                ret += "\r\n" + string.Format(other_string, rec.other14, rec.other14_url);
            }

            if (!string.IsNullOrEmpty(rec.other15))
            {
                ret += "\r\n" + string.Format(other_string, rec.other15, rec.other15_url);
            }

            return ret;
        }


        public static List<LowCsvModel> read_low(string temp)
        {
            List<string> row = null;
            int i = 0;
            var list = new List<LowCsvModel>();
            using (var csv = new CsvReader(@"D:\workspace\html_create\data\kagi110qqcojp小地域.csv"))
            {
                while ((row = csv.ReadRow()) != null)
                {
                    Console.WriteLine(row[0].ToString());
                    if (i > 2)
                    {
                        var csv_data = new LowCsvModel();
                        csv_data.no = row[0];
                        csv_data.area1 = row[1];
                        csv_data.area2 = row[2];
                        csv_data.area3 = row[3];
                        csv_data.match = row[4];
                        csv_data.url = row[5];
                        csv_data.ref_url = row[6];
                        csv_data.title = row[7];
                        csv_data.desc = row[8];
                        csv_data.h1 = row[9];
                        csv_data.tel = row[10];
                        csv_data.junkai = row[11];
                        csv_data.yago = row[12];
                        csv_data.midasi1 = row[13];
                        csv_data.honbun1 = row[14];
                        csv_data.midasi2 = row[15];
                        csv_data.honbun2 = row[16];
                        csv_data.midasi3 = row[17];
                        csv_data.honbun3 = row[18];
                        csv_data.midasi4 = row[19];
                        csv_data.honbun4 = row[20];
                        csv_data.other = row[21];
                        csv_data.other_url = row[22];
                        csv_data.other2 = row[23];
                        csv_data.other2_url = row[24];
                        csv_data.other3 = row[25];
                        csv_data.other3_url = row[26];
                        csv_data.other4 = row[27];
                        csv_data.other4_url = row[28];
                        csv_data.other5 = row[29];
                        csv_data.other5_url = row[30];
                        csv_data.other6 = row[31];
                        csv_data.other6_url = row[32];
                        csv_data.other7 = row[33];
                        csv_data.other7_url = row[34];
                        csv_data.other8 = row[35];
                        csv_data.other8_url = row[36];
                        csv_data.other9 = row[37];
                        csv_data.other9_url = row[38];
                        csv_data.other10 = row[39];
                        csv_data.other10_url = row[40];
                        csv_data.other11 = row[41];
                        csv_data.other11_url = row[42];
                        csv_data.other12 = row[43];
                        csv_data.other12_url = row[44];
                        csv_data.other13 = row[45];
                        csv_data.other13_url = row[46] ;
                        csv_data.other14 = row[47];
                        csv_data.other14_url = row[48];
                        csv_data.other15 = row[49];
                        csv_data.other15_url = row[50];
                        list.Add(csv_data);

                    }
                    i++;

                }
            }

            return list;

        }
    }
    public class LowCsvModel
    {

        public string no { get; set; }      //0
        public string area1 { get; set; }   //1
        public string area2 { get; set; }   //2
        public string area3 { get; set; }   //3
        public string match { get; set; }   //4
        public string url { get; set; }     //5
        public string ref_url { get; set; } //6
        public string title { get; set; }   //7
        public string desc { get; set; }    //8
        public string h1 { get; set; }      //9
        public string tel { get; set; }     //10
        public string junkai { get; set; }  //11
        public string yago { get; set; }    //12
        public string midasi1 { get; set; } //13
        public string honbun1 { get; set; } //14
        public string midasi2 { get; set; } //15
        public string honbun2 { get; set; } //16
        public string midasi3 { get; set; } //17
        public string honbun3 { get; set; } //18
        public string midasi4 { get; set; } //19
        public string honbun4 { get; set; } //20
        public string other { get; set; }   //21
        public string other_url { get; set; }   //
        public string other2 { get; set; }   //
        public string other2_url { get; set; }   //
        public string other3 { get; set; }   //
        public string other3_url { get; set; }   //
        public string other4 { get; set; }   //
        public string other4_url { get; set; }   //
        public string other5 { get; set; }   //
        public string other5_url { get; set; }   //
        public string other6 { get; set; }   //
        public string other6_url { get; set; }   //
        public string other7 { get; set; }   //
        public string other7_url { get; set; }   //
        public string other8 { get; set; }   //
        public string other8_url { get; set; }   //
        public string other9 { get; set; }   //
        public string other9_url { get; set; }   //
        public string other10 { get; set; }   //
        public string other10_url { get; set; }   //
        public string other11 { get; set; }   //
        public string other11_url { get; set; }   //
        public string other12 { get; set; }   //
        public string other12_url { get; set; }   //
        public string other13 { get; set; }   //
        public string other13_url { get; set; }   //
        public string other14 { get; set; }   //
        public string other14_url { get; set; }   //
        public string other15 { get; set; }   //
        public string other15_url { get; set; }   //




    }
}
