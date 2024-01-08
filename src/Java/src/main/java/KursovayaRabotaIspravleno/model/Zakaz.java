package KursovayaRabotaIspravleno.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabotaIspravleno.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISKursovayaRabotaIspravlenoЗаказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаказа")
    private Integer номерзаказа;

    @Column(name = "Носитель")
    private String носитель;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Fotokiosk")
    @Convert("Fotokiosk")
    @Column(name = "Фотокиоск", length = 16, unique = true, nullable = false)
    private UUID _fotokioskid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Fotokiosk", insertable = false, updatable = false)
    private Fotokiosk fotokiosk;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Foto> fotos;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаказа() {
      return номерзаказа;
    }

    public void setНомерЗаказа(Integer номерзаказа) {
      this.номерзаказа = номерзаказа;
    }

    public String getНоситель() {
      return носитель;
    }

    public void setНоситель(String носитель) {
      this.носитель = носитель;
    }


}