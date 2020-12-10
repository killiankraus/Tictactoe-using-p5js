using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using SIA.Models.DTO;
using SIA.Models.Entity;
using SIA.Models.Checking;



namespace SIA.Models.Repository
{
    public class RegistrationFormRepository
    {
        RegistrationEntities db = new RegistrationEntities();
        EncryptDecryptRepository EDrep = new EncryptDecryptRepository();
        Check check = new Check();

        public bool insertTodatabase(RegistrationFormDTO registrationFormDTO)
        {

            Registration reg = new Registration();
            //registrationFormDTO.RegistrationID
            var checkIfExisting = db.Registrations.Where(r => r.RegistrationFormID >= registrationFormDTO.RegistrationID).FirstOrDefault();

            if (checkIfExisting == null)
            {
                checkIfExisting.FirstName = registrationFormDTO.FirstName;
                checkIfExisting.MiddleName = registrationFormDTO.MiddleName;
                checkIfExisting.LastName = registrationFormDTO.LastName;
                checkIfExisting.EmailAddress = registrationFormDTO.EmailAddress;
                checkIfExisting.AddressLines = registrationFormDTO.AddressLines;
                //checkIfExisting.Username = check.checkUserName(registrationFormDTO.Username);
                checkIfExisting.Username = registrationFormDTO.Username;
                checkIfExisting.Password = EDrep.Encrypt(registrationFormDTO.Username, registrationFormDTO.Password);
                checkIfExisting.Contact = registrationFormDTO.Contact;
                checkIfExisting.Birthdate = registrationFormDTO.Birthdate;


                //reg.Username = checkUserName(data.Username);
                //reg.Password = EDrep.Encrypt(data.Username, data.Password);


                db.SaveChanges();


                return true;
            }
            else
            {

                //reg.FirstName = registrationFormDTO.FirstName;
                //reg.MiddleName = registrationFormDTO.MiddleName;
                //reg.LastName = registrationFormDTO.LastName;
                //reg.EmailAddress = registrationFormDTO.EmailAddress;
                //reg.AddressLines = registrationFormDTO.AddressLines;
                //reg.Username = registrationFormDTO.Username;
                //reg.Password = registrationFormDTO.Password;
                //reg.Contact = registrationFormDTO.Contact;
                //reg.Birthdate = registrationFormDTO.Birthdate;


                //db.Registrations.Add(reg);
                //db.SaveChanges();

                reg.FirstName = registrationFormDTO.FirstName;
                reg.MiddleName = registrationFormDTO.MiddleName;
                reg.LastName = registrationFormDTO.LastName;
                reg.EmailAddress = registrationFormDTO.EmailAddress;
                reg.AddressLines = registrationFormDTO.AddressLines;
                reg.Username = registrationFormDTO.Username;
                reg.Password = EDrep.Encrypt(registrationFormDTO.Username, registrationFormDTO.Password);
                Console.WriteLine(reg.Password.GetType());
                reg.Contact = registrationFormDTO.Contact;
                reg.Birthdate = registrationFormDTO.Birthdate;


                db.Registrations.Add(reg);
                db.SaveChanges();

                return true;
            }


        }
    }
}